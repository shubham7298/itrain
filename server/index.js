const path = require('path');
const express = require('express');
const fileUpload = require('express-fileupload');
const scopackager = require('simple-scorm-packager');

const cors = require('cors');
const { exec } = require('child_process');
const { constants } = require('buffer');

const app = express();
// enable files upload
app.use(fileUpload({
    createParentPath: true,
    limits: { 
        fileSize: 10 * 1024 * 1024 * 1024 //10MB max file(s) size
    },
}));

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors());

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
    res.send('cool!!!');
})

app.get('ppt', (req,res) => {
    res.send('cool!!!');
})

const PORT = 5000;

app.listen(
  PORT,
  console.log(
    `Server running on port 5000`
  )
);


// Functions

app.post('/upload-pptx', async (req, res) => {
    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let ppt_file = req.files.ppt;
            console.log(typeof(ppt_file.name));
            if(ppt_file.mimetype !== "application/vnd.openxmlformats-officedocument.presentationml.presentation") {
                throw "Only PPTX files to be uploaded !!!"
            }

            //Use the mv() method to place the file in upload directory (i.e. "uploads")
            await ppt_file.mv('./uploads/' + ppt_file.name);

            // Generate MD file
            let ppt_name = ppt_file.name;
            // let nameForShell = ppt_name.replace(/\s/g,'\\ ');
            let nameForShell = ppt_name.replace(/[&*+?^${}()|\s[\]\\]/g, "\\$&");
            console.log(nameForShell);
            let md_child = exec('python3 -m wecode2md uploads/'+nameForShell);
            md_child.stdout.on('data', function(data) {
                console.log('stdout: ' + data);
                // let nameOfSite = ppt_name.replace(/\s/g,'-');
                let nameOfSite = ppt_name.replace(/[&*+?^${}()|\s[\]\\]/g, "-");
                nameOfSite = nameOfSite.slice(0,-5);
                // generate static site
                let static_child = exec('reveal-md out.md --css main.css --template custom.html --static-dirs=img --static public/'+nameOfSite);
                static_child.stdout.on('data', function(data) {
                    console.log('Static site generated: '+data);
                });
                static_child.stderr.on('data', function(data) {
                    console.error(`exec error: ${data}`);
                    throw data;
                });
                static_child.on('close', function(code) {
                    console.log('static_child closing code: ' + code);
                    res.send({
                        status: true,
                        message: 'PPT is uploaded',
                        data: {
                            name: nameOfSite,
                            mimetype: ppt_file.mimetype,
                            size: ppt_file.size
                        }
                    });
                });
            });
            md_child.stderr.on('data', function(data) {
                console.error(`exec error: ${data}`);
                throw data;
            });
            md_child.on('close', function(code) {
                console.log('md_child closing code: ' + code);
            });


        }
    } catch (err) {
        res.status(500).send(err);
    }
});

// SCORM 
app.get('/scorm/:file', (req,res) => {
    console.log(req.params,req.query.file,__dirname);


    const config = {
        version: '1.2',
        organization: 'EY Hackpinions',
        title: 'Training Material',
        language: 'en-US',
        masteryScore: 80,
        startingPage: 'index.html',
        source: path.join(__dirname, 'public/'+req.params.file),
        package: {
          version: process.env.npm_package_version,
          zip: true,
          author: 'Team Wecode',
          outputFolder: path.join(__dirname, 'public/scorm_packages'),
          description: 'A test of the course packaging module',
          keywords: ['scorm', 'test', 'course'],
          typicalDuration: 'PT0H5M0S',
          rights: `©${new Date().getFullYear()} Made with Love during EY HACK. All right reserved.`,
          vcard: {
            author: 'Team Wecode',
            org: 'EY Hackpinions',
            tel: '(000) 000-0000',
            address: 'Pune, India',
            mail: 'shivampathak339@gmail.com',
            url: 'https://wecodeeyapp.herokuapp.com'
          }
        }
      };
     
      scopackager(config, function(msg){
        console.log(msg);
        res.send('TrainingMaterial_v1.0.0_2021-01-11.zip');
        // process.exit(0);
      });
})