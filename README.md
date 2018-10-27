# _Beep Boop_
#### Week 2 Independent Project at Epicodus, 10.27.2018
* _HTML Form and CSS to gather user information._
* _Manipulate user input using DOM and JQuery for front end logic_
* _Use JavaScript Loops and Arrays to create business logic_

### Created By
* _Tanvi Garg_

### Description
* _Accepts a number type user input and returns all number from 0 - usernumber with certain numbers containing 0,1 or divisible by 3 replaced with predefined strings for each condition._
* _Conditions are in the order of least to most importance._


### Specifications
* _**The program prints all numbers from 0 to user input number.**_
* _Input Range: user input number_
* _Output Example: Range: 0, 1, 2, 3...., user input number_
* _**Most Important Condition: Numbers divisible by 3 are replaced with "I'm sorry, UserName. I'm afraid I can't do that." For user input number = 5**_
* _Input Range: 0, 1, 2, 3, 4, 5_
* _Output Example: 0, 1, 2, "I'm sorry, UserName. I'm afraid I can't do that.", 4, 5_
* _**Second Most Important Condition: Numbers that contain a 1 are replaced (all digits) with "Boop!". For user input number = 5**_
* _Input Range: 0, 1, 2, 3, 4, 5_
* _Output Example: 0, "Boop!", 2, "I'm sorry, Dave. I'm afraid I can't do that.", 4, 5_
* _**Least Important Condition: Numbers that contain a 0 are replaced (all digits) with "Beep!". For user input number = 11**_
* _Input Range: 0, 1, 2, 3, 4, 5_
* _Output Example: "Beep!", "Boop!", 2, "I'm sorry, UserName. I'm afraid I can't do that.", 4, 5, "I'm sorry, UserName. I'm afraid I can't do that.", 7, 8, "I'm sorry, UserName. I'm afraid I can't do that.","Boop!", "Boop!"_
* _**Reverse output option available to User. For user input number = 5**_
* _Input Range: 0, 1, 2, 3, 4, 5_
* _Output Example: 5, 4, "I'm sorry, Tanvi. I'm afraid I can't do that.", 2, "Boop!", "Beep!"_
* _**NOTE: Numbers that contain both 1 and 0 are applied with the most important of the conditions i.e replace with "Boop!".**_
* _Input Example: 10_
* _Output Example: "Boop!"_
* _**NOTE: Numbers that contain both 0 and divisible by 3 are applied with the most important of the conditions i.e. "I'm sorry, UserName. I'm afraid I can't do that.".**_
* _Input Example: 30_
* _Output Example: "I'm sorry, UserName. I'm afraid I can't do that."_
* _**Edge Condition: Check whether input number qualifies to be a Number".**_
* _Input Example: "abcdef"_
* _Output Example: "Not a number, UserName! We only play with numbers for now!."_

### Complete setup/installation instructions
1. _Go to GitHub profile and project @ [TanviCodeLife](https://github.com/TanviCodeLife/beep-boop)_
2. _Use #git clone <project url> command to pull it to a local repository in your Home directory._
3. _Go to project folder beep-boop and open the index.html file in your browser._
4. _Input any number and click submit_
4. _Beep Boop Output will be displayed_

### Technologies used
1. **Bootstrap and custom CSS**
2. **JQuery and JavaScript**
3. **HTML5**
4. **Atom**
5. **Command Line**
6. **GitHub**

### Known Bugs
_No known bugs._

### Contact information
_tanvi.garg23@gmail.com_

### Support
* _For issues, please contact authors at the provided contact information above._

MIT License

Copyright (c) 2018 Tanvi Garg

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
