---
title: 9 Software Design Lessons I Learned While Scaling A Startup
tags: Software Design,Startup,Software Development,Best Practices,Software Architecture,Gyan
cover: cover.jpg
author: Pragyan Tripathi
metaDescription: Are you a software developer in an early stage startup? Wish to learn key lessons in software engineering to design reliable software architecture? Click to find out more!
summary: Nine mantras for software developers to survive uncertainity and high frequency changes in a startup without losing their sleep over it.
slug: 9-software-design-lessons-i-learned-while-scaling-a-startup
published: 2019-01-06
modified: 2019-01-13
---
Over three years, I worked as a Backend Team Lead at [Elanic](https://elanic.in) (India's Biggest Community For Buying and Selling). I learned a lot about software development during these "firey" years of scaling [Elanic](https://elanic.in) from 3 users in August 2015 to 3 million users in August 2018.

![Software Development - Expectations vs Reality](./software-development-expectations-vs-reality.png "Software Development Expectations Vs Reality")

I started with no prior experience in building a production-grade software system. I thought I had a good foundation of programming concepts. How hard could it be? Little that I knew, I am in for lots of sleepless nights and burning myself out in the quest of stabilizing [Elanic's](https://elanic.in) backend system.

>Trying to create new, challenging things is good for society, good for the industry and good for my own life. ~Sachio Semmoto

No other experience could have taught me what I know today. In this article, I share my experiences and the software design lessons I learned the hard way.

## Table Of Contents
1. [Start With The Data Model](#start-with-the-data-model)
2. [Separate Your Concerns - Flexible Abstractions](#separate-your-concerns)
3. [Leverage Rule Engines](#leverage-rule-engines)
4. [Prioritize Software Testing](#prioritize-software-testing)
5. [There Are No Coincidences](#there-are-no-coincidences)
6. [Things Will Break](#things-will-break)
7. [Setup Logging And Error Handling Early](#setup-logging-and-error-handling-early)
8. [It Will Take Longer Than You Think](#it-will-take-longer-than-you-think)
9. [There Will Always Be Bugs](#there-will-always-be-bugs)
10. [Bonus: Use Message Queues](#bonus-use-message-queues)
11. [Conclusion](#conclusion)

<a name="start-with-the-data-model"></a>

---

## 1. Start With The Data Model
Business people often care about data and concentrate on how this data can be transformed, combined and separated to meet business requirements.

Whereas software developers tend to care about the classes, functions, and processes they are writing.

This mismatch in the thinking process leads to further misunderstanding among business and engineering teams.

To understand the gravity of the problem let's draw a typical feature request timeline, I went through:

![Early Stage Startup Feature Request Pipeline](./early-stage-startup-feature-request-pipeline.png "Early Stage Startup Feature Request Pipeline")

Six months into my job as a backend developer, I realized I need to understand better business requirements and design system flexible enough to adapt that frequency of change.

Hence, **Data Modelling.**

Data modeling aims to define:

* **_The data contained in the database_** (e.g., entities: devices, profiles, products, carts, orders, wallets, etc.)

* **_The relationships among data items_** (e.g., users can create products, profiles can add these products to their cart, etc.)

* **_The constraints on data_** (e.g., at max only 30 products can be bought together, wallet credit should not be used if wallet balance becomes less than zero, etc.)

Following data modelling guidelines gave me a clear understanding of business requirements and teams were able to understand and communicate themselves better.

<a name="separate-your-concerns"></a>

---

## 2. Separate Your Concerns - Flexible Abstractions

![Separation Of Concerns](./separation-of-concerns.jpg "Separation Of Concerns")

When I started backend development in [Elanic](https://elanic.in), the problem we were trying to solve seemed natural. _It's a social community engaged in buying and selling of lifestyle items._

It took me seven consecutive sleepless nights to keep the servers running during our growth phase to understand there is nothing natural or straightforward about it.

Once we stabilized the system to sustain the traffic, I realized the whole codebase is the unsustainable mesh of reads and writes operations.

Next month went into a rewrite of the critical sections using proper abstractions - separating read and write operations.

Abstractions are the solutions to general problems. Consider `+` function. It is a solution to adding numbers in general. Without input arguments, it is quite useless.
 
Applying these abstractions to a particular set of arguments is a solution to a specific problem.

We often think of software as the solution to a particular issue, like accounting software is the solution to the problem of accounting. An e-commerce website is a solution to selling online.

But, it is a bit like kitchen being a solution to cooking. It doesn't tell the whole story. If you open the cabinet, you realize that preparing food is an extremely complicated process.

It involves solving a lot of smaller problems, like cutting, heating, mixing ingredients, etc. Our software is the same. It's hundreds of solutions to lots of subproblems.

As a software developer, when we develop a new system, our task is as involved as inventing a cuisine. Our tools are much more malleable than steel so that we can iterate faster, but we still need to fill those drawers with tools and develop techniques to select the right one and apply it in the right way.

<a name="leverage-rule-engines"></a>

---

## 3. Levarage Rule Engines

Once we decided to introduce voucher support in buy-flow of our application. To do it faster I hardcoded the coupon code and validation logic within the codebase.
Next day onwards, the marketing team kept asking to change the coupon almost every day, and we kept re-writing the same block of code instead of moving forward and focusing on other features. We couldn't properly test these deployments and ended up providing lousy user experiences.
Later on, similar kind of changes got introduced in deciding commission, delivery charges, pickup charges, etc. Thankfully, my mentor, Abhishek Chauhan introduced me to rule engines right before I was reaching the limit of my patience.

If you are not familiar with business rule engines, you may be wondering why you would want to use one. In most software applications, complex rule processing often takes the form of nested if-else blocks of code which can be very difficult to interpret and to maintain. 
If rules change (they always do),  a developer must work with a business person to define the new rule sets. The developer must then understand the existing implementation and realize what's happening to make the required modifications. These changes must then be recompiled, tested, and redeployed.

A business rules engine provides a means to separate the rules or logic of an application from the remaining codebase. Separating these rules offers enormous benefits.

* _Business rule engines allow the declarative style of programming. Rules define what should happen, without describing how should it be happening. This makes codebase much easier to read. Also, it becomes easier to make changes without introducing bugs._

* _These rules can be described in easy-to-understand language for business people. This enables business people to validate and even modify rules without involving software developers._

* _Also, you don't need to go through. If your deployment process requires passing each line of code through a strict workflow of recompilation and testing, leveraging rule engines can be a huge time saver._

<a name="prioritize-software-testing"></a>

---

## 4. Prioritize Software Testing

In an early stage startup, feature requests tend to change so often that writing automated tests takes a backfoot over manual testing and direct deployments. 

It's not until too late that you realize that the trade-off has been quite expensive. 

I won't suggest you write tests from the start but at-least write testable code.

Some code is written in such a way that it is hard, or even impossible, to write a good unit test for it. So, what makes code hard to test? Let's review some anti-patterns, code smells, and bad practices that we should avoid when writing testable code.

Uncontrolled non-determinism and side effects are similar in their destructive effects on the codebase. When used carelessly, they lead to deceptive, hard to understand and maintain, tightly coupled, non-reusable, and untestable code.

On the other hand, methods that are both deterministic and side-effect-free are much easier to test, reason about, and reuse to build larger programs.

In terms of functional programming, such methods are called pure functions. We'll rarely have a problem unit testing a pure function; all we have to do is to pass some arguments and check the result for correctness.

What really makes code untestable is hard-coded, impure factors that cannot be replaced, overridden, or abstracted away in some other way.

Impurity is toxic: if method Foo() depends on non-deterministic or side-effecting method Bar(), then Foo() becomes non-deterministic or side-effecting as well. Eventually, we may end up poisoning the entire codebase. Multiply all these problems by the size of a complex real-life application, and we'll find ourselves encumbered with a hard to maintain codebase full of smells, anti-patterns, secret dependencies, and all sorts of ugly and unpleasant things.

<a name="there-are-no-coincidences"></a>
---

## 5. There Will Always Be Bugs
If you are like me, who cares about his code quality and doesn't like bugs in his program, you will relate to the disappointment you had after the product launch. 

Disappointment is the degree of mismatch between our expectations and reality.

Our expectations of software quality are profoundly unrealistic. 

The only reliable, widely used way to ensure impeccable software quality is to write less software that does less stuff, and then spend eons honing that tiny lot.

Such an approach, however, is very rarely compatible with commercial success or even programmer motivations (despite what many may claim).

Bugs are an inevitable byproduct of writing software.

Sure, there are all sorts of techniques and potions that promise to decrease how many of the damn critters runabout, but only the comically hyperbole pretends that complete eradication is possible.

Once we accept that simple fact that software = bugs, we can progress to understand why fixing them may not even be that important a lot of the time.

The absence of bugs is simply one parameter of success in software, but not even close to the most important one (with some exception for life-critical systems).

Useless software can be entirely bug-free, yet remain entirely useless. Useful software can be ridden with bugs, yet remain highly valuable. Or, the value of software depends far more upon the problem it solves than the quality by which it does so.

<a name="things-will-break"></a>

---

## 6. Things Will Break

<a name="setup-logging-and-error-handling-early"></a>

---

## 7. Setup Logging And Error Handling Early
When developing a new software system, one of the first things you must do is add logging and error handling, because both are useful from the very beginning.

For all software systems that are bigger than a handful of lines of code, you need some way of knowing what happens in the program.

Perhaps not when it is working as expected, but as soon as it doesn't, you must be able to see what's happening. 

The same goes for error handling - errors and exceptions happen in the beginning too, so the sooner you systematically handle them, the better.

<a name="it-will-take-longer-than-you-think"></a>

---

## 8. It Will Take Longer Than You Think
Have you ever made a wrong estimate? 

According to Daniel Kahneman's research in the book [_**Thinking Fast and Slow**_](https://amzn.to/2RqN9dG) there is a fair chance you would say yes.

We are all bad at estimating. The reason why we are worse in estimating is that we don't seem to understand what estimates are.

We don't know what they are supposed to be. We don't see why we do them. We don't know how to do them.

The problem with estimates is that they _breed mistrust._ Once you give an estimated deadline, it immediately transforms into a contract and commitment. Then you miss it!
 
Have you ever missed an estimate? 

When you miss an estimate, the stakeholders assume that it was a commitment of some kind and you are not trustworthy. 

Let me show how wrong I have been in estimating:

The early backend system of Elanic was written using PHP and MySQL. When I had a discussion with founders, they painted a beautiful picture of the scale we would be handling.

There is going to be a multitude of social interactions, buying & selling of items, logistics tracking, feeds engagements, etc. We need to build a system which could handle such features and the scale of millions of users.

My job was to migrate it to a new stack using NodeJS, MongoDB, and Elasticsearch along with maintaining the current system. I brainstormed the new software architecture design and presented it.
 
My boss asked how long is it going to take? Well, it is a few API calls to write. Four weeks and we would be ready to launch.
 
We launched the new backend twelve months later. That was 12X of what was estimated. 

The problem seemed straightforward in the start. But there was no way I could have known the issues without actually going and trying to solve them.

I learned it is effortless to give an estimate for a project deadline. But it is extremely hard to hit it precisely.

Even as of today most of my projects take three times longer than the time I forecast.

There are so many external factors involved, communicating the requirements effectively, a simple merge turns out to be the cause of a catastrophic bug, or an API call doesn't work as promised, etc. It is quite common to run into unexpected problems.

<a name="there-will-always-be-bugs"></a>

---

## 9. There Are No Coincidences
Startups are really good at creating what I call "Fake Urgencies." People will come to you and say something like _"if we don't do this by tomorrow, we are doomed."_

As programmers, we're under constant pressure to deliver code quickly. The most important lesson I learned in the last three years is "haste always makes waste."

You should always take time to think about risks involved throughout the whole process.

Good software design is not an accident, it is the result of meticulous planning and leveraging exceptional programming skills.

Never believe in coincidences, when you are developing a new feature, or fixing bugs. You added a new feature, and an independent feature becomes unavailable? Not an accident.

Ignoring such occurrences, and not spending time investigating the issue may bring the whole system down. In some cases even kill people.

<a name="conclusion"></a>

---

## Conclusion
If you made it till this section, _**CONGRATULATIONS!**_. I really thank you for your commitment.

If I would like you to take in one lesson from my experiences in the post it's going to be:

_Software development is hard work. A clear codebase and flexible software architecture is no accident. Very few programs come out right the first time or even the third time. Remember this in moments of despair. If you find that building reliable, scalable, and flexible software application is hard, it's because it is hard._

## We 💚 your feedback

In this post I shared the lessons I learned while working for an early stage startup. If it helps you in any way please let me know in comments. You can also share your feedback through [Github](https://github.com/vadelabs/nerdsden/issues) or [Slack]()

## References and Further Reading
1. [MongoDB Data Modeling](https://amzn.to/2AyCQKk)
