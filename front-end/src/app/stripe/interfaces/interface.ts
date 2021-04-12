// To parse this data:
//
//   import { Convert, Welcome } from "./file";
//
//   const welcome = Convert.toWelcome(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface PaymentIntentLocal {
    id:                          string;
    object:                      string;
    amount:                      number;
    amount_capturable:           number;
    amount_received:             number;
    application:                 null;
    application_fee_amount:      null;
    canceled_at:                 null;
    cancellation_reason:         null;
    capture_method:              string;
    charges:                     Charges;
    client_secret:               string;
    confirmation_method:         string;
    created:                     number;
    currency:                    string;
    customer:                    null;
    description:                 string;
    invoice:                     null;
    last_payment_error:          null;
    livemode:                    boolean;
    metadata:                    Metadata;
    next_action:                 null;
    on_behalf_of:                null;
    payment_method:              null;
    payment_method_options:      PaymentMethodOptions;
    payment_method_types:        string[];
    receipt_email:               null;
    review:                      null;
    setup_future_usage:          null;
    shipping:                    null;
    statement_descriptor:        null;
    statement_descriptor_suffix: null;
    status:                      string;
    transfer_data:               null;
    transfer_group:              null;
}

export interface Charges {
    object:   string;
    data:     any[];
    has_more: boolean;
    url:      string;
}

export interface Metadata {
}

export interface PaymentMethodOptions {
    card: Card;
}

export interface Card {
    installments:           null;
    network:                null;
    request_three_d_secure: string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toWelcome(json: string): PaymentIntentLocal {
        return cast(JSON.parse(json), r("Welcome"));
    }

    public static welcomeToJson(value: PaymentIntentLocal): string {
        return JSON.stringify(uncast(value, r("Welcome")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Welcome": o([
        { json: "id", js: "id", typ: "" },
        { json: "object", js: "object", typ: "" },
        { json: "amount", js: "amount", typ: 0 },
        { json: "amount_capturable", js: "amount_capturable", typ: 0 },
        { json: "amount_received", js: "amount_received", typ: 0 },
        { json: "application", js: "application", typ: null },
        { json: "application_fee_amount", js: "application_fee_amount", typ: null },
        { json: "canceled_at", js: "canceled_at", typ: null },
        { json: "cancellation_reason", js: "cancellation_reason", typ: null },
        { json: "capture_method", js: "capture_method", typ: "" },
        { json: "charges", js: "charges", typ: r("Charges") },
        { json: "client_secret", js: "client_secret", typ: "" },
        { json: "confirmation_method", js: "confirmation_method", typ: "" },
        { json: "created", js: "created", typ: 0 },
        { json: "currency", js: "currency", typ: "" },
        { json: "customer", js: "customer", typ: null },
        { json: "description", js: "description", typ: "" },
        { json: "invoice", js: "invoice", typ: null },
        { json: "last_payment_error", js: "last_payment_error", typ: null },
        { json: "livemode", js: "livemode", typ: true },
        { json: "metadata", js: "metadata", typ: r("Metadata") },
        { json: "next_action", js: "next_action", typ: null },
        { json: "on_behalf_of", js: "on_behalf_of", typ: null },
        { json: "payment_method", js: "payment_method", typ: null },
        { json: "payment_method_options", js: "payment_method_options", typ: r("PaymentMethodOptions") },
        { json: "payment_method_types", js: "payment_method_types", typ: a("") },
        { json: "receipt_email", js: "receipt_email", typ: null },
        { json: "review", js: "review", typ: null },
        { json: "setup_future_usage", js: "setup_future_usage", typ: null },
        { json: "shipping", js: "shipping", typ: null },
        { json: "statement_descriptor", js: "statement_descriptor", typ: null },
        { json: "statement_descriptor_suffix", js: "statement_descriptor_suffix", typ: null },
        { json: "status", js: "status", typ: "" },
        { json: "transfer_data", js: "transfer_data", typ: null },
        { json: "transfer_group", js: "transfer_group", typ: null },
    ], false),
    "Charges": o([
        { json: "object", js: "object", typ: "" },
        { json: "data", js: "data", typ: a("any") },
        { json: "has_more", js: "has_more", typ: true },
        { json: "url", js: "url", typ: "" },
    ], false),
    "Metadata": o([
    ], false),
    "PaymentMethodOptions": o([
        { json: "card", js: "card", typ: r("Card") },
    ], false),
    "Card": o([
        { json: "installments", js: "installments", typ: null },
        { json: "network", js: "network", typ: null },
        { json: "request_three_d_secure", js: "request_three_d_secure", typ: "" },
    ], false),
};
