<!DOCTYPE html> 
<html> 
    <head> 
        <meta charset="utf-8"> 
        <title>What is the difference between a back end and a front end web programming language? | blog.kevinchisholm.com</title>
        <link rel="stylesheet" type="text/css" href="css/base.css" />
    </head>
    <body> 
	<section>
		<header ng-model="count" id="kcHeader">
			<hgroup>
			<h1>What is the difference between a back end and a front end web programming language?</h1>
			<h3><a href="http://blog.kevinchisholm.com" target="_blank">blog.kevinchisholm.com</a></h3>
			</hgroup>
		</header>
		<div id="main">
			<div class="content left">
				<h4>Server Message</h4>
				<p class="message">
					<?php 
						$message = 'This message was scripted on the server';

						echo $message;
					?>
				</p>
			</div>
			<div class="content right">
				<h4>Client Message</h4>
				<p class="message">
					<!-- JavaScript message will go here -->
				</p>
			</div>
		</div>
	</section>
    <script type="text/javascript" src="../js/jquery-1.9.1.min.js"></script>
	<script>
	$(document).ready(function(){
		var clientMessage = 'This message was scripted on the client';

		$('.content.right .message').html(clientMessage);
	});
	</script>
</body> 
</html>