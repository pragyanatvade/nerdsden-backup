---
title: 9 Software Design Lessons I Learned While Scaling A Startup
tags: Software Design,Startup,Software Development,Best Practices,Software Architecture,Gyan
cover: cover.jpg
author: Pragyan Tripathi
metaDescription: Are you a software developer in an early stage startup? Wish to learn key lessons in software engineering to design reliable software architecture? Click to find out more!
summary: Nine mantras for software developers to survive uncertainity and high frequency changes in a startup without losing their sleep over it.
slug: 9-software-design-lessons-i-learned-while-scaling-a-startup
published: 2019-01-06
modified: 2019-01-10
---
Over three years, I worked as a Backend Team Lead at [Elanic](https://elanic.in) _(India's Biggest Community For Buying and Selling)_. I learned a lot about software development during these _"firey"_ years of scaling Elanic from thirty users in August 2015 to three million users in August 2018.

[IMAGE]

I started with no prior experience in building a production-grade software system. I thought I had a good foundation of programming concepts. How hard could it be? Little that I knew, I am in for lots of sleepless nights and burning myself out in the quest of stabilizing Elanic's backend system. 

[IMAGE]

> Trying to create new, challenging things is good for society, good for the industry and good for my own life. ~Sachio Semmoto

No other experience could have taught me what I know today. In this article, I share the software design lessons I learned the hard way.

## Table Of Contents
1. [Start With The Data Model](#start-with-the-data-model)
2. [Separate Your Concerns](#separate-your-concerns)
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
Business people care about data and concentrate on how this data can be transformed, combined and separated to meet business requirements. Whereas software developers tend to care about the classes, functions, and processes they are writing.

This mismatch in the thinking process leads to further misunderstanding among business and engineering teams.

To understand the gravity of the problem let's draw a typical feature request timeline I went through:

[IMAGE]

Six months into my job as a backend developer, I realized I need to better understand business requirements and design system flexible enough to adapt frequently.

Hence, _**Data Modelling.**_

The aim of data modeling is to define:

* _**The data contained in the database** (e.g., entities: devices, profiles, products, carts, orders, wallets etc.)_
* _**The relationships among data items** (e.g., profiles can create products, products can be bought by profiles etc.)_
* _**The constraints on data** (e.g., at max only 30 products can be bought together, wallet credit should not be used if wallet balance becomes less than zero etc.)_

Following this step gave me a clear understanding of business requirements and teams were able to understand and communicate themselves better.

<a name="separate-your-concerns"></a>

---

## 2. Separate Your Concerns

When I started backend development in [Elanic](https://elanic.in), the problem we were trying to solve seemed easy. It's a social community engaged in buying and selling of lifestyle items. 

It took me seven continuous sleepless nights to keep the servers running during our growth phase to understand that it is not. Once we stabilized the system to sustain the traffic, I realized the whole codebase is the unsustainable mesh of reads and writes operations. 

Next month went into a rewrite of the critical sections using proper abstractions - separating read and write operations.

Abstractions are the solutions to general problems. The + function is a solution to add in general. It is quite useless without arguments to apply it to. The application of abstraction to particular arguments is a solution to a particular problem.

We often think of a piece of software as the solution to a problem, as in accounting software is the solution to the problem of accounting. But this is a bit like saying the kitchen is the solution to cooking. It doesn't tell the whole story. If you open the cabinet, you see that cooking is terribly complicated. It's made of a lot of smaller problems, like cutting and applying heat. Our software is the same. It's thousands of solutions to lots of subproblems.

When we develop a new system, our task is about as complicated as inventing cuisine. Our medium is much more malleable than steel, so we can iterate faster, but we still need to fill those drawers with tools and develop processes to select the right tool and apply it in the right way.

<a name="leverage-rule-engines"></a>

---

## 3. Levarage Rule Engines

Once we decided to introduce voucher support in buy-flow of our application. To do it faster I hardcoded the coupon code and validation logic within the codebase. 

Next day onwards, the marketing team kept asking to change the coupon almost every day, and we kept re-writing the same block of code instead of moving forward and focus on other features.

Later on, similar kind of changes got introduced in deciding commission, delivery charges, pickup charges etc. Thankfully, my mentor introduced me to rule engines to solve such problems gracefully.

If you are not familiar with rules engines, you may be wondering why you would want to use one. In most applications, complex rule processing often takes the form of nested if-else blocks of code which can be very difficult to decipher and to maintain. If rules change, a developer must work with a business user to define the new rules. The developer must then read through the existing logic to understand what is happening and make the necessary modifications. The changes must then be recompiled, tested, and redeployed. A rules engine provides a means to separate the rules or logic of an application from the remaining code. Separating these rules provides several distinct advantages.

1. _A rule engine allows for a more declarative style of programming where the rules define what is happening, without describing how it is happening. This makes it much easier to read than nested 'if-else' blocks of code. It's also easier to make changes without introducing bugs in your code._

2. _The rules are written in a language that is easier for non-developers to understand. This makes it easier for business users to validate and even modify the rules without having to involve developers._

3. _A rule engine allows for changes to be made to the rules without requiring that you recompile your application. If your code must pass through a strict deployment workflow, this can be a huge time saver and can also save a significant amount of money._

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

The only reliable, widely used way to ensure impeccable software quality is to write less software that does less stuff, and then spend eons honing that tiny lot. Such an approach, however, is very rarely compatible with commercial success or even programmer motivations (despite what many may claim).
Bugs are an inevitable byproduct of writing software. Sure, there are all sorts of techniques and potions that promise to decrease how many of the damn critters runabout, but only the comically hyperbole pretends that complete eradication is possible.
Once we accept that simple fact that software = bugs, we can progress to understand why fixing them may not even be that important a lot of the time. The absence of bugs is simply one parameter of success in software, but not even close to the most important one (with some exception for life-critical systems).
Useless software can be entirely bug-free, yet remain entirely useless. Useful software can be ridden with bugs, yet remain highly valuable. Or, the value of software depends far more upon the problem it solves than the quality by which it does so.

<a name="things-will-break"></a>

---

## 6. Things Will Break

<a name="setup-logging-and-error-handling-early"></a>

---

## 7. Setup Logging And Error Handling Early

<a name="it-will-take-longer-than-you-think"></a>

---

## 8. It Will Take Longer Than You Think


<a name="there-will-always-be-bugs"></a>

---

## 9. There Are No Coincidences

<a name="bonus-use-message-queues"></a>

---

## 10. Bonus: Use Message Queues

<a name="conclusion"></a>

---

## Conclusion

## We 💚 your feedback

In this post I shared the lessons I learnt while working for a early stage startup. If it helps you in any way please let me know in comments. You can also share your feedback through [Github](https://github.com/vadelabs/nerdsden/issues) or [Slack]()

## References and Further Reading
1. [MongoDB Data Modeling](https://amzn.to/2AyCQKk)
