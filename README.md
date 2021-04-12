# Query stripe backend en mysql

CREATE DATABASE `tutorial_stripe` /*!40100 DEFAULT CHARACTER SET latin1 */;


select * from `tutorial_stripe`.`articulo`;

INSERT INTO `tutorial_stripe`.`articulo`
(`id`,
`descripcion`,
`imagenurl`,
`nombre`,
`precio`)
VALUES
(2,
 'The Definitive Guide',
'https://tse3.mm.bing.net/th?id=OIP.04DXtFarb7jxI-yutd2yPAHaDe&pid=Api&P=0&w=324&h=152',
'Mis Loros',
2590);

	# Run mysql para stripe backend
	# cd backend_java/
	    mvn spring-boot:run



    #  Run backend with node:    cd \backend
      npm run dev


  # Run frontEnd : cd front-end/
    ng serve --open
  
