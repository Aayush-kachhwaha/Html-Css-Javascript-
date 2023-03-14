<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz Application</title>
    <style>
        button{
            background-color: #2f2f2f;
            color: #fff;
            on
        }
    </style>
</head>
<body>
	<div id="page-wrap">
		<h1>Simple Quiz Built On PHP</h1>
		<form action="result.php" method="post" id="quiz">
            <ol>
                <li>
                    <h3>What does HTML stand for?</h3>
                    <div>
                        <input type="radio" name="Q1" id="Ans-A" value="A" />
                        <label for="question-1-answers-A">Hyper Text Markup Language </label>
                    </div>
                    <div>
                        <input type="radio" name="Q1" id="Ans-B" value="B" />
                        <label for="question-1-answers-B">Home Tool Markup Language</label>
                    </div>
                    <div>
                        <input type="radio" name="Q1" id="Ans-C" value="C" />
                        <label for="question-1-answers-C">Hypler Text Markpu Language</label>
                    </div>
                </li>
                <li>
                    <h3>SEO is Part Of...</h3>
                    <div>
                        <input type="radio" name="question-2-answers" id="question-2-answers-A" value="A" />
                        <label for="question-2-answers-A">Video Editing</label>
                    </div>
                    <div>
                        <input type="radio" name="question-2-answers" id="question-2-answers-B" value="B" />
                        <label for="question-2-answers-B">Graphic Designing</label>
                    </div>
                    <div>
                        <input type="radio" name="question-2-answers" id="question-2-answers-C" value="C" />
                        <label for="question-2-answers-C">Web Designing</label>
                    </div>
                    <div>
                        <input type="radio" name="question-2-answers" id="question-2-answers-D" value="D" />
                        <label for="question-2-answers-D">Digital Marketing</label>
                    </div>
                </li>
                <li>
                    <h3>PHP is a....</h3>
                    <div>
                        <input type="radio" name="question-3-answers" id="question-3-answers-A" value="A" />
                        <label for="question-3-answers-A">Server Side Script</label>
                    </div>
                    <div>
                        <input type="radio" name="question-3-answers" id="question-3-answers-B" value="B" />
                        <label for="question-3-answers-B">Programming Language</label>
                    </div>
                    <div>
                        <input type="radio" name="question-3-answers" id="question-3-answers-C" value="C" />
                        <label for="question-3-answers-C">Markup Language</label>
                    </div>
                    <div>
                        <input type="radio" name="question-3-answers" id="question-3-answers-D" value="D" />
                        <label for="question-3-answers-D">None Of Above These</label>
                    </div>
                </li>
                <li>
                    <h3>Localhost IP is..</h3>
                    <div>
                        <input type="radio" name="question-4-answers" id="question-4-answers-A" value="A" />
                        <label for="question-4-answers-A">192.168.0.1</label>
                    </div>
                    <div>
                        <input type="radio" name="question-4-answers" id="question-4-answers-B" value="B" />
                        <label for="question-4-answers-B">127.0.0.0</label>
                    </div>
                    <div>
                        <input type="radio" name="question-4-answers" id="question-4-answers-C" value="C" />
                        <label for="question-4-answers-C">1080:80</label>
                    </div>
                    <div>
                        <input type="radio" name="question-4-answers" id="question-4-answers-D" value="D" />
                        <label for="question-4-answers-D">Any Other</label>
                    </div>
                </li>
                <li>
                    <h3>Webdevtrick Is For</h3>
                    <div>
                        <input type="radio" name="question-5-answers" id="question-5-answers-A" value="A" />
                        <label for="question-5-answers-A">Web Designer</label>
                    </div>
                    <div>
                        <input type="radio" name="question-5-answers" id="question-5-answers-B" value="B" />
                        <label for="question-5-answers-B">Web Developer</label>
                    </div>
                    <div>
                        <input type="radio" name="question-5-answers" id="question-5-answers-C" value="C" />
                        <label for="question-5-answers-C">Graphic Designer</label>
                    </div>
                    <div>
                        <input type="radio" name="question-5-answers" id="question-5-answers-D" value="D" />
                        <label for="question-5-answers-D">All Above These</label>
                    </div>
                </li>
            </ol>

            <input type="submit" value="Submit" class="submitbtn" />
           
            
		</form>
	</div>
</body>
</html>