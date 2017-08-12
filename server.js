var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
var articles={
'article-one' :{ 
title:'Article One|Athul',
heading:`Article One`,
content:`               <p>Yooo man,OMKV OMKV OMKV</p>
                        <p>Yooo man,OMKV OMKV OMKV</p>
                        <p>Yooo man,OMKV OMKV OMKV</p>
                        <p>Yooo man,OMKV OMKV OMKV</p>`
},
'article-two' :{
title:'Article Two|Athul',
heading:`Article Two`,
content:`               <p>Yooo man,OMKV OMKV OMKV</p>
                        <p>Yooo man,OMKV OMKV OMKV</p>
                        <p>Yooo man,OMKV OMKV OMKV</p>
                        <p>Yooo man,OMKV OMKV OMKV</p>`
},
'article-three' :{
title:'Article Three |Athul',
heading:`Article Three`,
content:`               <p>Yooo man,OMKV OMKV OMKV</p>
                        <p>Yooo man,OMKV OMKV OMKV</p>
                        <p>Yooo man,OMKV OMKV OMKV</p>
                        <p>Yooo man,OMKV OMKV OMKV</p>`
}  
};
function createTemplate(data){
var title=data.title;
var heading=data.heading;
var content=data.content;
var htmltemplate=
`<html>
    <head>
        <link href="/ui/style.css" rel="stylesheet" />
        <title>
        ${title}
        </title>
        <meta name="viewport" content="width=device-width , initial-scale=1"/>
         
    </head>
       
       
            <body>
             <div class="container">
                    <div>
                        <a href='/'>Home</a>
                    </div>
                    <div>
                        <h1>${heading}</h1>
                    </div>
                    <div>
                        Aug 12,2017
                    </div>
                    <div>
                      ${content}
                    </div>
               </div>

            </body>
   </html>`      
;
return htmltemplate;
}
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/stewie.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'stewie.png'));
});

app.get('/:articleName', function (req, res) {
    articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName])) ;
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
