---
title: How To Design Software That You Can Be Proud Of?
tags: Software Development,Software Design,Best Practices,Gyan
cover: cover.jpg
author: Pragyan Tripathi
metaDescription: Ever wondered why software development is so difficult? Let me tell you the ways you can make your life easier as a software developer. Click Now To Know How!
summary: Ever wondered why software development is so difficult? In this article we will learn about software development practices that leads to un-manageable and crapy software designs. Also, what can you do to avoid it in your upcoming project.
slug: how-to-design-software-that-you-can-be-proud-of
published: 2019-01-01
modified: 2019-01-30
---

It's 2 o'clock in the morning you are happily strolling through your dream world, sipping lemonade across the beach, watching the picturesque view of your imagination, like a millionaire.

![Every Programmers' Dream](./programmer-dream.png "Every Programmers' Dream")

Suddenly, out of nowhere a phone call disrupts all your happiness.
With a deep sigh, you check your phone:

> Another bad morning. Another production issue. Another crappy code to fix.

You decide to put on your cape, switch on your PC, silent your slack notifications and start digging for the issue in a pile of crap. You figure out the problem, fix it and go back to sleep, thinking:

> **Why is it so hard to build a reliable software application?**

![Software Reliability Is Not An Accident](./software-reliability-not-accident.jpeg 'Software Reliability Is Not An Accident')

The next morning nothing feels right to you. Everything feels bland and incoherent. You don't want to continue writing buggy software anymore. Instead, you want to build something which could be revered by your peers. It could pass the test of time and can evolve in something bigger than you ever imagined.

**So, what can you do about it?**

There are two ways you can solve the problem:

The **_first_** one might have already crossed your mind. **_Run away!_** Book your tickets to the Himalayas and never come back.

If you are even remotely considering it, there is no need to go further. Trust me; you might get pulled to the darker side.

![Welcome To The Dark Side Of Software Development](./welcome-to-the-dark-side-of-software-development.png 'Welcome To The Dark Side Of Software Development')

The **_second one_**, however, is the one we are going to talk about in this article. **_Writing efficient and simple programs._**

Further, in the article, we are going to understand what it means for software to be complicated. What can you do to avoid it in your upcoming project?

## Table Of Contents
1. [What Makes Software Development Complex](#what-makes-software-development-complex)
2. [Qualities Of A Good Software Design](#qualities-of-a-good-software-design)
3. [Step By Step Guide To Complex Software Design](#step-by-step-guide-to-complex-software-design)
4. [How To Mitigate Complexity In Software Design?](#how-to-mitigate-complexity-in-software-design)
5. [How to Measure Your Software Development Progress?](#how-to-measure-your-software-development-progress)
6. [Conclusion](#conclusion)

<a name="what-makes-software-development-complex"></a>

## What Makes Software Development Complex?

There are two kinds of software complexities: **_Essential Complexity_** and **_Accidental Complexity_**.

> One way to summarize, the flow of complexity is increasing requirements for coordination.

![Essential Vs Accidental Software Complexity](./essential-vs-accidental-complexity.png 'Essential Vs Accidental Software Complexity')

### Essential Complexity

It is inherent to the software development. The primary source of this kind of complexity is the product specifications itself. If your program needs to do ten tasks to attain business objectives, you can't get rid of any to make your application simpler.

Increase in the number of product features along with environmental complexities (CPU, Memory, Network, etc.) increases the number of states of a software system exponentially. It makes understanding, visualizing, describing and testing software harder.

![Complexity Of A Software Application](./complexity-software-application.png 'Complexity Of A Software Application')

Scaling a software system is not merely a repetition of the same elements in larger sizes. In most cases, software components need to interact with each other in some non-linear fashion and complexity of the system increases more than linearly.

This non-linear interaction among software components makes it difficult to communicate the idea among the stakeholders and the team members which leads to product flaws, cost overruns, and schedule delays.

The difficulty of estimating and understanding the possible states of a program is the primary cause of the software system being unreliable. It makes it hard to handle and control all the edge cases.

This level of complexity is almost impossible for a single human brain even to comprehend. It becomes even harder when individual components are intertwined because we cannot reason about them in isolation. <a name="what-makes-software-development-complex_accidental-complexity"></a>

### Accidental Complexity

It occurs because developers don't tend to be good at their jobs. They unintentionally make their lives hell as a result of trying to solve a problem.

![Software Developer's Dilemma ](./programmers-dilemma.png "Software Developer's Dilemma")

The biggest driver of accidental complexity is developers sticking with their first draft of the program, just because it works. I happened to write around 110 drafts of the current article before publishing this one. But while programming that doesn't happen.

The clean code looks like it was easy to write, when in fact it usually involves several drafts. We write the best way that comes in our head first, notice the complexity introduced, then "look for a better way" and refactor to remove those complexities. Then we keep on "looking for a better move" until we are unable to find one.

![Production Level Code Quality](./production-level-code-quality.png 'Production Level Code Quality')

It's not just individual developers makes their lives miserable. Organizations help them in that too. When any project is nearing completion, there is always a mad rush to get new features added. The rush is mad indeed because it leads into a trap of added complexities. They tend to focus on how quickly they can write something, how easy is it to replace one developer with another. Considering just the familiarity with the tools used, not the simplicity or complexity of the code the new developer needs to handle.

<a name="qualities-of-a-good-software-design"></a>

## Qualities Of A Good Software Design

Our goal in this article is to learn how to design and develop good software systems. However, what exactly does "good software" mean?

Different stakeholders differ in their requirements for a good software system.

### Users

Questions which a prospective user might ask for qualifying a software as good can be:

- _Does it provide the full range of desired functionality for its intended purpose?_
- _Does it reliably produce the expected result for the correct input?_
- _Is it safe, secure and handles wrong inputs gracefully?_
- _Is it easy to use?_
- _Is it performant?_
- _Can we rely on it?_
- _Does it work well with other software I am currently using?_

<a name="qualities-of-a-good-software-design_operators"></a>
### Operators

The people responsible for deploying and maintaining the software are concerned with other sets of issues.

- _Software should be secure from malicious attacks intended to compromise other components of IT infrastructure._
- _It should use computing resources effectively and shouldn't be responsible for bringing other services down within the infrastructure._

<a name="qualities-of-a-good-software-design_developers"></a>

### Developers
Whereas for developer software quality corresponds to the quality of the source code and how individual components are linked together.

- _It should be simple to modify the software to adapt it to changing requirements._
- _It should run efficiently on a variety of different computing platforms._


To summarize an software application must have a right balance of following features to qualify as a desirable software system.

| **Quality**        | **What It Means** |
| :------------- |:-------------|
| **Delightful User Experience**    | If you don't get it right, nothing else will matter. An application must be useful, usable and desirable to the user.|
| **Available**      | It should be ready to perform the required action when it is needed. |  
| **Performant**| When it comes to speed, your application must always meet or exceed the user's expectations. It should do so consistently even in the event of peak load.|
| **Scalable** | If you fail to design software for scale, you will run into performance or availability problems that in turn leads to a degraded user experience.|
| **Adaptable** | It should be easy for developers to understand and modify or extend the application's functionality as per requirements.|
| **Secure** | The goal here is design application that can ensure data confidentiality, integrity, and privacy. It should provide resilience to denial of service attacks and unauthorized user access |
| **Economical** | Every design decision carries a cost. Whether is a choice of technology, programming language or databases. Your design should minimize the cost of building, operating, and changing application without compromizing the business values |

> Source: [The Seven Qualities Of Wildly Desirable Software](https://go.forrester.com/blogs/11-02-11-the_seven_qualities_of_wildly_desirable_software/)


Designing such software is like playing chess. Rules of playing chess are pretty simple, but it takes years of practice and dedication to be a grandmaster. Even though these software qualities achievable, it involves the combination of knowledge, creative vision, and technique. The implementation technique must be flawless to deliver bug-free software with optimal performance and reliability. It takes a lot of practice, iterations and, collaboration to build a good software system.

<a name="step-by-step-guide-to-complex-software-design"></a>

## Step By Step Guide To Complex Software Design

Wait! What? Weren't we supposed to learn how to create simple and efficient software?

Yes, we are. But to understand simplicity, we must start appreciating the subtle art of building complex software first.

> We live in a culture of complexity. It comes naturally to us.

However, we are not going to discuss naturally induced complexity, which your peers will spot in a snap. We will follow industry practices and stay buzzword compliant with the latest trends, while quietly spreading complexity throughout the systems.

![Software Development Connected Universe](./software-development-connected-universe.png 'Software Development Connected Universe')

A software system can be assumed to be a connected universe, and your program is a dot in that universe. Your goal is to write the code in a way that complexity flows for people upstream or downstream of your application.

### 1. Use Deep Inheritance

Inheritance advocates code re-use. You should make it your religion. Whenever a new feature request comes along, other developers might try re-using your code.
They will think, "All I got to do is simply grab this Class from the project and use it."

Little would they know the surprise that awaits them? They would need all the parent Classes as well. Once they start compiling, they will realize your program depends on another object. They need to import that whole object along with all of its parents.

Deep level inheritance helps polluting many higher-level classes with methods and properties which are relevant to only a small number of subclasses. It starts showing its true colors especially when the operations deal with complex relationships between objects.

So, wait and watch as the software grows.

### 2. Embrace Setters And Getters

Let me start with an anecdote.

> In one of my freelance project, I found out that dozens of websites were using the header and navigation of the parent corporation's main site. Their websites worked fine for the first 30 minutes after the deployment. Then (bam!) suddenly all of them went down.
>
> Later on, we realized that the culprit was a setter method hiding deep within the guts of the shared platform that these different sites were using. A piece of code that was scheduled to run every 30 minutes updated the underlying value that determined side headers and languages by calling this setter.

At the end of every constructor run, we are guaranteed to have an object in a valid state. Setter methods can help in ruining all of that. It's impossible to check validity in setter methods because of hierarchies in the data; they are not atomic. They also undermine interfaces, because they can't enforce an interface contract.

The getter methods can be just as bad. Let me demonstrate a use case:

```java
public class Accounts {
  private List<Account> accounts;
  public List <Account> getAccounts {
    return accounts;
  }
}
```

OK, that seems reasonable. We should be able to print user account details.

In Java or Javascript, returning reference type from a getter provides that reference to the caller, and now he can manipulate it in unexpected ways.

```java
Accounts allAcounts = AccountTracker.lookupAccounts("nerdsden");
List<Account> accounts = allAccounts.getAccounts();
// Can I remove all the accounts?
accounts.remove("nerdsden");
// Seems like I can
// Prints Empty Result
AccountTracker.lookupAccounts("nerdsden").printReport();
```

That's why getters and setters should be an integral component in your software design if you are aiming for complexity.

There are few ways to mitigate such tragedies. You must stay away from any of these.

1.  _Return a copy instead of references_
2.  _Have immutable properties_
3.  _The best way is not to expose any member at all. Instead, manipulations of properties must happen inside the class. It helps in achieving full isolation of implementation and creates only one place to change._

### 3. Write Lots Of Unit Tests

![Chronicles Of Unit Testing](./unit-testing.jpeg 'Chronicles Of Unit Testing')

> Imagine you have three modules, A, B, and C. You wrote an extensive unit test suite for each component. Later on, you decide to change the implementation so that A and C can split B's functionality among themselves. You now have two new modules with different interfaces. All the unit tests you wrote are of no use anymore. You may use some of the older test code, but now you need to re-write the entire test suite.

Every unit test you write is not production code solving someone's problem. Therefore, you should make unit-testing your religion. You should handcraft a lot of different inputs. They should replace the need for documentation and code reviews in your program.

### 4. Abstract Information With Objects

![World View Of An Object Oriented Programmer](./object-oriented-programmer.png 'World View Of An Object Oriented Programmer')

Information is a simple construct; it comes in few shapes (`characters`, `booleans`, `numbers`, `scalars`, `sequences`, `arrays`, `maps`, `sets`, etc.) You must abstract them with objects (`Profile`, `Order`, `Product`, etc.) Encapsulate them using setters and getters.

Use **setters** to modify the values with an **update-in-place model**. Moreover, restrict their direct access using **getters**. It will enable people around you to deal with unnecessary data abstraction that you have kept in place. It will automatically make their code order of magnitude larger.

### 5. Throw Non-Descriptive Errors Messages

![Irrelevant Error Messages](./irrelevant-error-messages.png 'Irrelevant Error Messages')

### 6. Use Static Types

Imagine there is a popular method `getX()` you wrote. It has around 1,000 calls in a software application. Each call assumes that the `X` is an `integer`, but now someone else needs to change the return type to `long`.

You can imagine how hellish his life is going to be. It will start with 1,000 compile errors.

Another developer might cast `X` back to an `integer`, but it won't work either. _(The return value might be truncated.)_ He must modify the code surrounding each of those 1,000 calls to compensate for the change.

To increase software complexity, you want effects of change ripple out into the entire program.

### 7. Update Information In Place

![Mutation](./mutation.png 'Mutation')

Mutable data-structures don't provide any guarantee that something will remain unchanged. Problems occur when we use the same structure in separate parts of the application, then any change in one module might create a bug in another. This kind of bug is generally hard to track.

Javascript is very flexible for such mutations; it means you can transform any object into something different on the fly.

In one line, an object might be representing a dog, and in next it can be modified into a chicken, with no regard to its historical representations.
These kinds of situations enhance fears about system state and code predictability. For anyone who wants to keep software design complected - this is the holy grail.

The primary motivation for mutable data structures and transient programming practices is the philosophy of scarcity.

- _Memory is expensive_
- _Storage is expensive_
- _Machines are precious_
- _Resources are dedicate_

Everything about writing software is difficult with transient data types.

- _Sharing is hard_
- _Distribution is hard_
- _Concurrency is hard_
- _Access is always eager_
- _Caching is difficult_

> If you follow these ideas and combine a bunch of them together, the symptoms will show up not in your program, but in another program that uses your code, directly or indirectly. Everyone around you will think you are an excellent developer. You will be a hero as you lead more significant and larger teams burning the midnight oil to keep systems alive.

<a name="how-to-mitigate-complexity-in-software-design"></a>

## How To Mitigate Complexity In Software Design?

> Simplicity is the absence of complexity.

So you need to avoid everything you read in the above section at all costs.

In this section, we will talk about a few more ideas you must adapt to build scalable and flexible software systems.

### 1. Enqueue

Object-Oriented Programming facilitates method calls on objects - presumes that objects are available and close. Since that's not always true, queues can come to your rescue.

**Reasons to use queues:**

1.  _**Decoupling:** It's difficult to predict the state of the project in the future. Message queues provide separation of concerns among processes with a data-based interface to communicate among them. This way each service can be modified, scaled independently, by only adhering to the same interface._

2.  _**Reliability:** Sometimes jobs fail due to process failure. Queues provide us ways to store the information until it executes the tasks successfully._

3.  _**Scalability:** As message queues decouple your services, it's easy to scale up the system to handle the more massive load just by adding new processes._

4.  _**Debuggability:** Queues give you an excellent insight into the data flow of the application. By measuring the rate of message processing, we can quickly identify the under-performing processes._

5.  _**Resiliency:** When some services in your application breaks, it shouldn't take the whole system down with it. Message queue gives you the ability to accept the request and re-try them later when the service is back up and running._

6.  _**Asynchronous Processing:** Many times you need to defer data processing for later. It allows you to schedule jobs for future execution._

### 2. Leverage Business Rule Engines

Have you ever spent sleepless nights debugging code when you modified one of those "if" statements and found that it distorted the next if statement?

Business rule engines are a great way to collect complex decision-making logic and work with the data too large for humans to effectively use.

![Advantages Of Business Rule Engines](./business-rules-engine.png 'Advantages Of Business Rule Engines')

Business rule engines are really helpful from a flexibility standpoint.

* _As compared to the core code, rules more straightforward to understand._
* _Decouples application code and business logic making code easier to maintain and adapt to changes._
* _Adding, modifying, or removing existing rules is much easier than changing a program._
* _It helps us create a central knowledge repository and reuse as much code as possible._

### 3. Always Be Composing

> The essence of software development is composition.

It's better to compose functionality of a module out of smaller building blocks instead of inheriting for code re-use.

![Inheritance V/S Composition](./inheritance-vs-composition.png 'Inheritance V/S Composition')

<a name="how-to-measure-your-software-development-progress"></a>

## How To Measure Your Software Development Progress?

The conventional wisdom is if you can't measure it, you can't manage it. It loses its glitter in the software development realm.

The idea depends on the measurement of metrics.

The problem with metrics is, if you focus on trying to achieve a number instead of trying to understand the complex system, you can easily find situations where you are achieving your numbers but actually destroying the operations. It happens all the time in business development.

There is not in much we do that is measurable. You can try to measure: 
* _Lines of code_
* _The rate of introducing bugs_
* _The frequency of fixing bugs_

None of them is a meaningful measure. 

You can't predict how many lines of code are going to be there in a software application and measure completeness of application by how much lines are there in it. You can try to create an incentive or punishment systems which are tied to these numbers, but they all are going to fail.

![Progress In Software Development](./software-development-progress.png 'Progress Measurement In Software Development')

What we really want to measure is:
* _The actual number of defects_
* _Estimate remaining effort to completion_
* _Maintainability of the source code_

The reason we don't have these metrics is that programming is not a manufacturing process. It is a process of discovery by trial and error.

So instead of trying to have an objective measurement for our progress we can device subjective heuristics to understand if we are making progress relative to what we have done in past. Thankfully, we have few frameworks at our disposal we can use to measure the degree of complexity in software.

While understanding source code, programmer builds a mental model of the software which involves an understanding of *Control Flow* and *Data Flow* in the program. We can use the following heuristic for measuring software complexity:

1.  [_**Cyclomatic complexity:**_](http://www.projectcodemeter.com/cost_estimation/help/GL_cyclomatic.htm) _It measures how much control flow exists in an application. Operations like `IF, ELSE, FOR LOOP, etc.` represent control flow. A program with more conditional logic is more difficult to understand, this metric gives us an assessment of that._

2.  [_**Halstead volume:**_](http://www.projectcodemeter.com/cost_estimation/help/GL_halstead.htm) _It is a measurement of how much information exist in the source code. It looks at the number of variables, functions, operations, and frequency of their usage across the source code. A programmer must get himself familiar with this information as they all affect data flow within the running program._

3.  [_**Maintainability Index:**_](http://www.projectcodemeter.com/cost_estimation/help/GL_maintainability.htm) _It tries to formulate the overall maintainability of the source code with an empirical formula. It makes use of above two measurements along with the number of lines of code and number of lines comment within a software source code._

<a name="conclusion"></a>

## Conclusion

> Either you abandon the product early, or you stick with it long enough to see it become complex.

![Life Of A Software Developer](./life-of-a-software-developer.png 'Life Of A Software Developer')

Any useful software program either evolves with time, or it becomes obsolete. By its nature, the evolution of software is inevitably complicated. It's a common misconception among people concerned with software that the majority of software development is programming. **_It is a combination of people interactions, user centric design, and implementation._**

In this article, I have presented ways to mitigate complexity for as long as possible in a software development cycle.

Building an efficient and straightforward application is an **iterative** and **collaborative** process. At [Nerd's Den](https://nerds-den.com), we aim to catalog our journey of designing simpler software systems performing complex endeavors. Therefore, I welcome you to embark with us on the journey of developing software that we could be proud of.

Also, if you have any war stories about dealing with complexity in software development? Share with us in comments!

## We 💚 your feedback

Software development is a broad topic for a single blog post. So feel free to comment about what you liked, loved or hated about the article. You can also share your feedback through [Github](https://github.com/vadelabs/nerdsden/issues) or [Slack]()

## References and Further Reading

1.  [Book: Getting Real](https://amzn.to/2PkiNUe)
2.  [Book: Clean Code](https://amzn.to/2BRBUlo)
3.  [Book: Measure What Matters](https://amzn.to/2BXrwII)
4.  [Book: The Computer Boys Take Over](https://amzn.to/2zTzyki)
5.  [Book: The Mythical Man-Month](https://amzn.to/2B2ZJ7V)
6.  [Video: Simple Made Easy](https://www.infoq.com/presentations/Simple-Made-Easy)
7.  [Video: Narcissistic Design](https://www.youtube.com/watch?v=LEZv-kQUSi4&t=228s)
