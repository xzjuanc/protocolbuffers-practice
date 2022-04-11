# protocolbuffers-practice
First practice

# Version Protocol Buffer Compiler
3.20.0-win64

# Protocol Buffer Instalation on OS Windows and NodeJS

**Download Last Release Stable Version**

https://github.com/protocolbuffers/protobuf/releases

![alt text](images/download.PNG)  

**Save and unzip on the path you like**
![alt text](images/unzip.PNG.PNG)  

**Add enviroment variable for executing**
![alt text](images/enviroment_variable.PNG)  

**Verify installation**
![alt text](images/verify.PNG)  

**Install Google Protocol Buffer Module**
npm i google-protobuf

# Compiling .proto for Javascript
Example USING COMMAND LINE
protoc --js_out=import_style=commonjs,binary:. president.proto

**It will generate a file president_pb.js**

# Testing Example 
**Debugging on terminal**
![alt text](images/debugging.PNG)  

**Debugging binary data**
![alt text](images/debugging_binary.PNG)  

**Debugging raw data**
![alt text](images/debugging_rawData.PNG)  