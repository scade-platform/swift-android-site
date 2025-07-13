---
title: Hello World
description: Minimal Swift Android App
---
##Goals
- Android app that is minimal
- that uses Swift code written in Xcode

## Create project directory
1. Create directory **HelloWorld** that contains your Swift library

```bash filename="Terminal"
./Projects % mkdir HelloWorld
```
## Create Xcode project 
2. Create Xcode project that contains your shared code

```bash filename="Terminal"
./Projects/HelloWorld  % swift package init --type library --name HelloWorld
```


```bash filename="Terminal"
./Projects/HelloWorld  % swift package init --type library --name HelloWorld
Creating library package: HelloWorld
Creating Package.swift
Creating .gitignore
Creating Sources/
Creating Sources/HelloWorld/HelloWorld.swift
Creating Tests/
Creating Tests/HelloWorldTests/
Creating Tests/HelloWorldTests/HelloWorldTests.swift\
```
## Open project in Xcode and add first class

3. Open project in XCode

4. Create Swift class called **GreetingService.swift**

- This is a very simple class with a function greet
- Function greet has two argument
	- **name**: a variale of type string
	- **response**: a variable of type closure 
- the function executes the closure using the name argument as a input 

```swift
public class GreetingService {
  func greet(name: String, _ response: (String) -> Void) {        
    response("Swift greets \(name)")
  }
}
```
![img](./../img/helloworld-xcode1.png)
## Add @jvm to compile the class to Android
