<!DOCTYPE html>
<html>
	<head>
		<title>My First PHP Web Page</title>
	</head>
	<body>

	<style type="text/css">
	    *{
	    	margin: 0px;
	    	padding: 0px;
	    }
		header{
            width:100vw;
            height: 100vh;

			background-image: -webkit-linear-gradient(-45deg,rgba(200, 70, 255,.9),rgba(0, 160, 255,.9)); 
            background-image:    -moz-linear-gradient(-45deg,rgba(200, 70, 255,.9),rgba(0, 160, 255,.9));
            background-image:     -ms-linear-gradient(-45deg,rgba(200, 70, 255,.9),rgba(0, 160, 255,.9));
            background-image:      -o-linear-gradient(-45deg,rgba(200, 70, 255,.9),rgba(0, 160, 255,.9));
            background-image:         linear-gradient(-45deg,rgba(200, 70, 255,.9),rgba(0, 160, 255,.9));


            display: flex;
            flex-direction:  column;;
            justify-content: center;
            align-items: center;
		}
		button{
			background: white;
			width: 200px;
			height: 40px;
			border-radius: 20px;
		}
		a{
			font-size: 1.2em;
			font-weight: 600;
			color: black;
			font-family: Arial;
			text-decoration: none;
		}
	</style>


        <header>
		 <button>
		 	<a href="WebGL_octants.html">GO TO DRAWING</a>
		 </button>
		 </header>
	</body>
</html>
