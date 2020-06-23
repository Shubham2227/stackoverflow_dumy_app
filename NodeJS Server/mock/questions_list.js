module.exports = {
  questions: [
    {
      question: "What is a NullPointerException, and how do I fix it?",
      description:
        "What are Null Pointer Exceptions (java.lang.NullPointerException) and what causes them?</p><p>What methods/tools can be used to determine the cause so that you stop the exception from causing the program to terminate prematurely?",
      answers: [
        {
          votes: "3759",
          solution:
            "The NullPointerException occurs when you declare a variable but did not create an object and assign to the variable before trying to use the contents of the variable (called dereferencing). So you are pointing to something that does not actually exist.Dereferencing usually happens when using . to access a method or field, or using [ to index an array.If you attempt to dereference num BEFORE creating the object you get a NullPointerException. In the most trivial cases, the compiler will catch the problem and let you know that num may not have been initialized, but sometimes you may write code that does not directly create the object.",
        },
        {
          votes: "877",
          solution:
            "NullPointerExceptions are exceptions that occur when you try to use a reference that points to no location in memory (null) as though it were referencing an object. Calling a method on a null reference or trying to access a field of a null reference will trigger a NullPointerException. These are the most common, but other ways are listed on the NullPointerException javadoc page.On the first line inside main, I'm explicitly setting the Object reference obj equal to null. This means I have a reference, but it isn't pointing to any object. After that, I try to treat the reference as though it points to an object by calling a method on it. This results in a NullPointerException because there is no code to execute in the location that the reference is pointing.(This is a technicality, but I think it bears mentioning: A reference that points to null isn't the same as a C pointer that points to an invalid memory location. A null pointer is literally not pointing anywhere, which is subtly different than pointing to a location that happens to be invalid.)",
        },
        {
          votes: "696",
          solution:
            "A good place to start is the JavaDocs. They have this covered:Thrown when an application attempts to use null in a case where an object is required. These include:Calling the instance method of a null object.Accessing or modifying the field of a null object.Taking the length of null as if it were an array.Accessing or modifying the slots of null as if it were an array.Throwing null as if it were a Throwable value.Applications should throw instances of this class to indicate other illegal uses of the null object.",
        },
      ],
    },
    {
      question: "The Definitive C++ Book Guide and List",
      description:
        "This question attempts to collect the few pearls among the dozens of bad C++ books that are published every year.Unlike many other programming languages, which are often picked up on the go from tutorials found on the Internet, few are able to quickly pick up C++ without studying a well-written C++ book. It is way too big and complex for doing this. In fact, it is so big and complex, that there are very many very bad C++ books out there. And we are not talking about bad style, but things like sporting glaringly obvious factual errors and promoting abysmally bad programming styles.Please edit the accepted answer to provide quality books and an approximate skill level — preferably after discussing your addition in the C++ chat room. (The regulars might mercilessly undo your work if they disagree with a recommendation.) Add a short blurb/description about each book that you have personally read/benefited from. Feel free to debate quality, headings, etc. Books that meet the criteria will be added to the list. Books that have reviews by the Association of C and C++ Users (ACCU) have links to the review.",
      answers: [
        {
          votes: "4917",
          solution:
            "Programming: Principles and Practice Using C++ (Bjarne Stroustrup, 2nd Edition - May 25, 2014) (updated for C++11/C++14) An introduction to programming using C++ by the creator of the language. A good read, that assumes no previous programming experience, but is not only for beginners.",
        },
      ],
    },
    {
      question:
        "What are the rules about using an underscore in a C++ identifier?",
      description:
        "It's common in C++ to name member variables with some kind of prefix to denote the fact that they're member variables, rather than local variables or parameters. If you've come from an MFC background, you'll probably use m_foo. I've also seen myFoo occasionally.C# (or possibly just .NET) seems to recommend using just an underscore, as in _foo. Is this allowed by the C++ standard?",
      answers: [
        {
          votes: "852",
          solution:
            'The rules (which did not change in C++11): Reserved in any scope, including for use as implementation macros: identifiers beginning with an underscore followed immediately by an uppercase letter identifiers containing adjacent underscores (or "double underscore")Reserved in the global namespace:identifiers beginning with an underscoreAlso, everything in the std namespace is reserved. (You are allowed to add template specializations, though.)',
        },
        {
          votes: "198",
          solution:
            "The rules to avoid collision of names are both in the C++ standard (see Stroustrup book) and mentioned by C++ gurus (Sutter, etc.). Personal rule Because I did not want to deal with cases, and wanted a simple rule, I have designed a personal one that is both simple and correct: When naming a symbol, you will avoid collision with compiler/OS/standard libraries if you: never start a symbol with an underscore never name a symbol with two consecutive underscores inside. Of course, putting your code in an unique namespace helps to avoid collision, too (but won't protect against evil macros)",
        },
        {
          votes: "38",
          solution:
            "From MSDN: Use of two sequential underscore characters ( __ ) at the beginning of an identifier, or a single leading underscore followed by a capital letter, is reserved for C++ implementations in all scopes. You should avoid using one leading underscore followed by a lowercase letter for names with file scope because of possible conflicts with current or future reserved identifiers. This means that you can use a single underscore as a member variable prefix, as long as it's followed by a lower-case letter. This is apparently taken from section 17.4.3.1.2 of the C++ standard, but I can't find an original source for the full standard online.",
        },
      ],
    },
    {
      question: "What is the copy-and-swap idiom?",
      description:
        "What is this idiom and when should it be used? Which problems does it solve? Does the idiom change when C++11 is used?",
      answers: [
        {
          votes: "2192",
          solution:
            "Any class that manages a resource (a wrapper, like a smart pointer) needs to implement The Big Three. While the goals and implementation of the copy-constructor and destructor are straightforward, the copy-assignment operator is arguably the most nuanced and difficult. How should it be done? What pitfalls need to be avoided? The copy-and-swap idiom is the solution, and elegantly assists the assignment operator in achieving two things: avoiding code duplication, and providing a strong exception guarantee.",
        },
        {
          votes: "274",
          solution:
            "Assignment, at its heart, is two steps: tearing down the object's old state and building its new state as a copy of some other object's state. Basically, that's what the destructor and the copy constructor do, so the first idea would be to delegate the work to them. However, since destruction mustn't fail, while construction might, we actually want to do it the other way around: first perform the constructive part and, if that succeeded, then do the destructive part. The copy-and-swap idiom is a way to do just that: It first calls a class' copy constructor to create a temporary object, then swaps its data with the temporary's, and then lets the temporary's destructor destroy the old state. Since swap() is supposed to never fail, the only part which might fail is the copy-construction. That is performed first, and if it fails, nothing will be changed in the targeted object.",
        },
      ],
    },
    {
      question:
        "Which equals operator (== vs ===) should be used in JavaScript comparisons?",
      description:
        "I'm using JSLint to go through JavaScript, and it's returning many suggestions to replace == (two equals signs) with === (three equals signs) when doing things like comparing idSele_UNVEHtype.value.length == 0 inside of an if statement. Is there a performance benefit to replacing == with ===? Any performance improvement would be welcomed as many comparison operators exist. If no type conversion takes place, would there be a performance gain over ==?",
      answers: [
        {
          votes: "6504",
          solution:
            "The strict equality operator (===) behaves identically to the abstract equality operator (==) except no type conversion is done, and the types must be the same to be considered equal. Reference: Javascript Tutorial: Comparison Operators The == operator will compare for equality after doing any necessary type conversions. The === operator will not do the conversion, so if two values are not the same type === will simply return false. Both are equally quick.",
        },
        {
          votes: "1147",
          solution:
            "In the answers here, I didn't read anything about what equal means. Some will say that === means equal and of the same type, but that's not really true. It actually means that both operands reference the same object, or in case of value types, have the same value.",
        },
        {
          votes: "270",
          solution:
            'If in doubt, read the specification! ECMA-262 is the specification for a scripting language of which JavaScript is a dialect. Of course in practice it matters more how the most important browsers behave than an esoteric definition of how something is supposed to be handled. But it is helpful to understand why new String("a") !== "a". Please let me explain how to read the specification to clarify this question. I see that in this very old topic nobody had an answer for the very strange effect. So, if you can read a specification, this will help you in your profession tremendously. It is an acquired skill. So, let\'s continue. Searching the PDF file for === brings me to page 56 of the specification: 11.9.4. The Strict Equals Operator ( === ), and after wading through the specificationalese I find: 11.9.6 The Strict Equality Comparison Algorithm The comparison x === y, where x and y are values, produces true or false. Such a comparison is performed as follows: 1. If Type(x) is different from Type(y), return false. 2. If Type(x) is Undefined, return true. 3. If Type(x) is Null, return true. 4. If Type(x) is not Number, go to step 11. 5. If x is NaN, return false. 6. If y is NaN, return false. 7. If x is the same number value as y, return true. 8. If x is +0 and y is −0, return true. 9. If x is −0 and y is +0, return true. 10. Return false. 11. If Type(x) is String, then return true if x and y are exactly the same sequence of characters (same length and same characters in corresponding positions); otherwise, return false. 12. If Type(x) is Boolean, return true if x and y are both true or both false; otherwise, return false. 13. Return true if x and y refer to the same object or if they refer to objects joined to each other (see 13.1.2). Otherwise, return false. Interesting is step 11. Yes, strings are treated as value types. But this does not explain why new String("a") !== "a". Do we have a browser not conforming to ECMA-262? Not so fast! Lets check the types of the operands. Try it out for yourself by wrapping them in typeof(). I find that new String("a") is an object, and step 1 is used: return false if the types are different. If you wonder why new String("a") does not return a string, how about some exercise reading a specification? Have fun!',
        },
      ],
    },
    {
      question: "How do JavaScript closures work?",
      description:
        "How would you explain JavaScript closures to someone with a knowledge of the concepts they consist of (for example functions, variables and the like), but does not understand closures themselves I have seen the Scheme example given on Wikipedia, but unfortunately it did not help.",
      answers: [
        {
          votes: "7373",
          solution:
            'A lexical environment is part of every execution context (stack frame), and is a map between identifiers (ie. local variable names) and values. Every function in JavaScript maintains a reference to its outer lexical environment. This reference is used to configure the execution context created when a function is invoked. This reference enables code inside the function to "see" variables declared outside the function, regardless of when and where the function is called. If a function was called by a function, which in turn was called by another function, then a chain of references to outer lexical environments is created. This chain is called the scope chain.',
        },
        {
          votes: "3993",
          solution:
            "Every function in JavaScript maintains a link to its outer lexical environment. A lexical environment is a map of all the names (eg. variables, parameters) within a scope, with their values. So, whenever you see the function keyword, code inside that function has access to variables declared outside the function.",
        },
      ],
    },
    {
      question:
        "What does “use strict” do in JavaScript, and what is the reasoning behind it?",
      description:
        'Recently, I ran some of my JavaScript code through Crockford\'s JSLint, and it gave the following error: Problem at line 1 character 1: Missing "use strict" statement. Doing some searching, I realized that some people add "use strict"; into their JavaScript code. Once I added the statement, the error stopped appearing. Unfortunately, Google did not reveal much of the history behind this string statement. Certainly it must have something to do with how the JavaScript is interpreted by the browser, but I have no idea what the effect would be. So what is "use strict"; all about, what does it imply, and is it still relevant? Do any of the current browsers respond to the "use strict"; string or is it for future use?',
      answers: [
        {
          votes: "4948",
          solution:
            'This article about Javascript Strict Mode might interest you: John Resig - ECMAScript 5 Strict Mode, JSON, and More To quote some interesting parts: Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a "strict" operating context. This strict context prevents certain actions from being taken and throws more exceptions. And: Strict mode helps out in a couple ways: It catches some common coding bloopers, throwing exceptions. It prevents, or throws errors, when relatively "unsafe" actions are taken (such as gaining access to the global object). It disables features that are confusing or poorly thought out.',
        },
        {
          votes: "1249",
          solution:
            "Putting it in your code now shouldn't cause any problems with current browsers as it's just a string. It may cause problems with your code in the future if your code violates the pragma. For instance, if you currently have foo = \"bar\" without defining foo first, your code will start failing...which is a good thing in my opinion.",
        },
      ],
    },
  ],
};
