# Prime
A Prime number generator.

## Table Of Contents
* [General Info](#general-info)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Contact](#contact)

## General Info
The code, here, is written to implement a fibonacci series.

## Technologies Used
The code will be written in Typescript and tested using JestJS.
 
## Features
* Get the sequence of prime numbers starting from 2.
* Get the sequence of prime numbers  starting from another number.
* Get each value of the sequence.
* Get an array of the values of the sequence.

## Setup
Just import the class, as usual.
 
## Usage
The code from the project will be largely executed through the testing of the code to ensure that a correct solution has been found.
```
   npm test
```

To use in a project, instaniate the class.
```
    const primes: Prime = Prime(10);
```
, which gives the first *ten* numbers of the sequence starting with *2*.

Alternatively, we can start with any other starting number, here n.
```
    const fib: Fibonacci = new Fibonacci(10, n);
```

To obtain the values of the sequence, we can get an array of the sequence, by
```
    [...primes]
```
This example gives the array of the sequence as *[2, 3, 5, 7, 11, 13, 17, 19, 23, 29]*.
 
Alternatively, we can get each value sequentially. From the first example, above,
```
    primes.next().value
```
gives the number *2*.
```
    fib.next().value
```
gives the number *3*.
```
    fib.next().value
```
gives the number *5*.

We can obtain in one of these two methods, but not both. If one is employed, and we attempt to employ the other an error will occur.

## Project Status
The project will be in an ongoing status until the code is completed.
  
## Room for Improvement
Similarly to the above section of this document, there can be seen a general room for improvement.

## Contact
Feel free to contact me @michaelrjamesjr on twitter.                                                                          
