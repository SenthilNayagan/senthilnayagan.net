---
title: "Math Matters: Essential Math for Aspiring AI Experts"
description: The journey starts with mastering some essential mathematical concepts! Linear algebra is our toolkit for handling and manipulating data in multiple dimensions. Calculus becomes our guide to understanding how models learn and optimize performance. Probability and statistics are our crystal balls, helping us predict outcomes and discover patterns in the data. Finally, discrete mathematics shapes our ability to design and analyze algorithms. These mathematical foundations enable us to construct, comprehend, and improve advanced AI and ML models.
keywords: [math-for-ai-ml, essential-math]
categories: [math-for-ai-ml, essential-math]
coverImage: ./images/cover-image.png
imageDescription: A prehistoric scene set in the stone age, depicting early humans learning basic counting and mathematics in a natural setting.
imageCredits: Image generated by DALL-E.
lastUpdated: 2024-07-11
draft: true
---

{% include "toc.md" %}

# Why mathematics matters for AI?

Mathematics is the hidden engine driving the fascinating world of AI and ML. Imagine trying to build a bridge without understanding the principles of physics—that's what AI development would be like without math! The fundamental laws and principles of physics, such as stress, strain, and gravity, are essential for understanding the behavior of physical systems. Similarly, mathematics provides the fundamental tools and techniques for understanding and analyzing complex systems, such as data patterns, probability, and optimization. Whether we're a math whiz or a curious newbie, the math concept that's been buzzing around in our brain is probably the key to unlocking AI's incredible abilities. From the *geometry* of self-driving cars to the *algebra* of language processing, math is the thread that weaves together the complex systems and algorithms of AI.

Unlock the secrets of AI with the ultimate math toolkit! While **calculus**, **linear algebra**, **optimization**, **probability**, and **statistics** are the top-tier math subjects for AI implementation, don't worry if you're not a master of them all. Think of it like a recipe for AI success: you only need to know the right ingredients to cook up a masterpiece. Focus on the math topics that spark your curiosity, and you'll be well on your way to creating AI that's the talk of the town! 

Depending on the dish we're trying to cook up, we might need to add a pinch of random matrix theory to spice up our machine learning, a dash of graph theory to navigate complex networks, a sprinkle of game theory to beat our opponents, a simmer of differential equations to model real-world phenomena, or a dash of operations research to optimize our workflow. With the right math ingredients, we'll be serving up AI solutions that are the perfect blend of art and science!

By mastering these mathematical concepts, we unlock the true potential of AI and ML, transforming theory into groundbreaking applications. Dive in, and watch as the numbers come alive, powering the future of intelligent technology. Setting out on a journey to understand artificial intelligence (AI) and machine learning (ML) can be both "thrilling" and "daunting"—especially when it comes to the mathematics that support these technologies. If you’re looking to dive into this field of essential mathematics for AI and ML, knowing where to start and how to proceed effectively with your mathematical learning is crucial.

Here’s a structured direction to help you navigate through the essential mathematics for AI and ML:

**Starting with: [Linear algebra](#unlock-the-power-of-linear-algebra-the-secret-to-mastering-data)**

Linear algebra is the first mathematical toolkit we should arm ourselves with. It forms the foundation of how data is structured and manipulated in AI and ML. Here’s a brief look at how linear algebra contributes to AI and ML:

- **Data representation**
  - **Vectors and matrices**: Data in machine learning is often represented as vectors (1D arrays) and matrices (2D arrays). For example, a dataset with  `n`  features<a href="#ref-1" class="reference-link" data-ref="ref-1"><sup id="back-to-1">1</sup></a> and  `m`  samples can be represented as an  `m x n`  matrix.
  - **Images**: Digital images are represented as matrices (2D for grayscale images, 3D for color images with RGB channels).
- **Linear transformations**
  - **Feature transformation**: Linear transformations, represented by matrices, are used to change the representation of data. This includes scaling, rotating, and translating data points.
  - **Dimensionality reduction**: Techniques like Principal Component Analysis (PCA) use linear algebra to reduce the dimensionality of data, helping to simplify models and visualize high-dimensional data.
- **Optimization algorithms**
  - **Gradient descent**: This algorithm, fundamental to training many machine learning models, involves operations on vectors to update parameters iteratively.
  - **Convex optimization**: Many optimization problems in machine learning, such as support vector machines, rely on convex functions, where linear algebra helps in finding optimal solutions.
- **Neural networks**
  - **Weights and activations**: Neural networks are essentially composed of layers of linear transformations (weights as matrices) followed by non-linear activations. Backpropagation, the algorithm for training neural networks, involves matrix and vector operations.
  - **Convolutional operations**: Convolutional neural networks (CNNs) use convolutions, which are linear operations applied to data structured as matrices.

These are only a few examples of how linear algebra contributes to AI and ML, demonstrating its fundamental role in various aspects of these fields.


<!-- Operations involving vectors, matrices, and tensors are common in neural networks and other ML models. Grasping concepts like vector spaces, matrix transformations, eigenvalues, and eigenvectors will give us a solid base to build upon. These concepts are not only theoretical but have practical applications in areas such as image processing, natural language processing, and recommender systems. -->

Key topics:
- Vectors and matrices
- Matrix operations
- Eigenvalues and eigenvectors
- Singular value decomposition

**Next: Calculus**

Once we are comfortable with linear algebra, calculus should be our next topic. Calculus, particularly *differential calculus*, is essential for understanding how algorithms optimize and learn from data. It allows us to understand *gradient descent*—an optimization algorithm that is fundamental in training deep learning models. By learning about derivatives and integrals, we will be better equipped to understand the dynamics of machine learning algorithms, especially how changes in data affect the learning process.

Key topics:
- Derivatives and integrals
- Partial derivatives
- Multivariable calculus (for advanced learning)

**Next: Probability and statistics**

Probability and statistics are crucial for handling and making decisions from data, which is inherently noisy and uncertain. These branches of mathematics help in modeling and evaluating the behavior of algorithms under various conditions. Understanding concepts like *probability distributions*, *statistical tests*, and *bayesian thinking* will empower us to design and evaluate ML models more effectively.

Key topics:
- Probability rules and distributions
- Descriptive statistics (mean, median, variance)
- Hypothesis testing and Bayesian methods

**Next: Discrete mathematics**

Discrete mathematics introduces us to the logical and structural aspects of mathematics that are important for algorithm design and analysis. This area enhances our understanding of how algorithms function and their limitations, which is essential for debugging and improving AI models.

Key topics:
- Logic and set theory
- Combinatorics
- Graph theory
- Information theory

**Finally: Optimization**

Understanding optimization techniques is akin to learning the art of fine-tuning AI models. Optimization in AI is about finding the best configuration of model parameters<a href="#ref-2" class="reference-link" data-ref="ref-2"><sup id="back-to-2">2</sup></a> to improve accuracy and performance. Familiarity with concepts like convex optimization and learning various gradient descent methods will serve as your final piece of the puzzle.

Key topics:
- Linear programming
- Convex optimization
- Gradient descent methods

By following this structured path, we not only build a solid foundation in the mathematics necessary for AI and ML but also develop the practical skills to bring our ideas to life. Don't be fooled - this is no sprint<a href="#ref-3" class="reference-link" data-ref="ref-3"><sup id="back-to-3">3</sup></a>, but a marathon that requires patience, persistence, and dedication.

---

# Number theory

Before we go into detail explaining all these essential mathematics, let’s first know briefly about number theory and why it is important.

Number theory is a branch of mathematics that deals with the properties and relationships of numbers, especially integers. It provides a framework for solving problems related to patterns, relationships, and cryptography, which are critical components of AI and ML.

- **Cryptography**: Secure communication relies heavily on number theory, particularly prime numbers and modular arithmetic.
- **Algorithms**: Many algorithms in computer science, including those used in AI, are based on number-theoretic principles.
- **Data structures**: Efficient data storage and retrieval methods often utilize concepts from number theory.

Here are different number systems:

- **Natural numbers**: These are the numbers 1, 2, 3, 4, 5... and so on. Only *positive numbers* are included here.
- **Whole numbers**: Whole numbers are non-negative integers, including 0. Whole numbers include all natural numbers, plus zero. The set of whole numbers is: 0, 1, 2, 3, 4, 5,...
- **Integers**: Integers include positive and negative natural numbers as well as 0. 
- **Rational numbers:** A rational number is a number that can be expressed as the ratio of two integers, i.e., a fraction. It is a number that can be written in the form: `a/b`, where `a` and `b` are integers, and `b` is non-zero.
- **Irrational numbers:** Irrational numbers cannot be expressed as a fraction. This means they cannot be expressed as a ratio of two integers `a/b`, where `a` and `b` are integers and `b` is not zero. It's non-repeating and non-terminating decimals. This means, the decimal form of an irrational number goes on forever without repeating. For example, the number π (pi) is approximately 3.14159, but its decimal representation goes on infinitely without repeating-it starts as 3.14159265358979323846… and goes on forever. Common examples of irrational numbers include π (pi), √2 (the square root of 2), and e (Euler’s number<a href="#ref-4" class="reference-link" data-ref="ref-4"><sup id="back-to-4">4</sup></a>).
- **Real numbers**: A real number is a value that represents a quantity that can be expressed as a decimal or fraction. Real numbers can be either rational or irrational. They include different types of numbers that we use every day, from counting apples to measuring the length of a table. Examples of real numbers: Natural numbers, whole numbers, integers, fractions (rational numbers), and decimals (including irrational numbers).
- **Complex and imaginary numbers**: In mathematics, complex numbers are numbers that can be expressed in the form: `a + bi`, where `a` is a real number (a scalar), `b` is a real number (a scalar) and `i` is the imaginary unit, which is defined as the square root of -1. Imaginary numbers are a subset of complex numbers, and they are numbers that can be expressed in the form: `bi`. Imaginary numbers are often combined with real numbers to form complex numbers. Imaginary numbers are numbers that, when squared, give a negative result. This is fundamentally different from real numbers, where squaring any real number always gives a positive result. Imaginary numbers are unique because they allow for the square roots of negative numbers. This extension of the number system is crucial for solving many mathematical and real-world problems that cannot be addressed with real numbers alone. By defining `i` and using it to form other imaginary numbers, we can square these numbers and always get a negative result, thus expanding our mathematical toolkit.

---

# Unlock the power of linear algebra: The secret to mastering data

Linear algebra is a branch of mathematics that has revolutionized the way we understand and interact with the world around us. At its core, linear algebra is about **vectors**. 

## What is a vector?

A vector is a mathematical object that has both *magnitude* (length or size) and *direction*, often used to represent quantities<a href="#ref-5" class="reference-link" data-ref="ref-5"><sup id="back-to-5">5</sup></a> with both size and orientation<a href="#ref-6" class="reference-link" data-ref="ref-6"><sup id="back-to-6">6</sup></a>, such as displacement<a href="#ref-7" class="reference-link" data-ref="ref-7"><sup id="back-to-7">7</sup></a>, velocity, or force. In linear algebra, vectors are often represented as *arrows* in a coordinate system, with the length of the arrow representing the magnitude of the vector and the direction of the arrow representing the direction of the vector. Think of them as super-powered lists of numbers that can be added, subtracted, multiplied, and combined in countless ways. With vectors, we can represent everything from data points to directions, velocities, and even complex systems. Vectors are a fundamental concept in linear algebra and are used in many areas of mathematics and science. The purpose of the vector is to visually represent a piece of data.

{% aside %}
****Understanding the difference: Vectors in programming vs. mathematical vectors****

A vector in the context of data structures and arrays is a dynamic, resizable array (collection of elements) that allows for efficient random access to elements, supports homogeneous element storage (not heterogeneous), and provides automatic resizing capabilities. Vectors are widely used in programming due to their flexibility and ease of use, making them a fundamental data structure for handling sequences of elements in various applications. It is important not to confuse these programming vectors with mathematical vectors, which are objects with both magnitude and direction used in fields like linear algebra.
{% endaside %}

Linear algebra deals with the study of *linear equations*, *vector spaces*, *linear transformations*, and *matrices*. Linear algebra is hugely fundamental to many applied areas of math, statistics, operations research, data science, and machine learning. When we work with data in any of these areas, we are using linear algebra and perhaps we may not even know it.

{% aside %} **Note**: Displacement is often represented as a vector, which means it has both magnitude (length) and direction. For example, if we move 3 meters north, the displacement vector would have a magnitude of 3 meters and an orientation of north. {% endaside %}

A vector isn't just a mathematical concept; it's a versatile tool with countless practical applications. In physics, think of a vector as a combination of direction and magnitude, guiding us like a compass. In math, it's a way to describe direction and scale on an XY plane, similar to mapping out a journey. Meanwhile, in computer science, a vector transforms into an array of numbers, efficiently storing and organizing data. Whether navigating physical forces, plotting points, or managing information, vectors are essential in various fields.

**Example**:

Imagine a vector `v` in a two-dimensional space, starting from the origin `(0,0)` and pointing to the point `(3, 6)`. Graphically, this vector can be represented as:

{% include "postImage.html" src: "./images/vector_diagram_transparent.png", baseFormat: "png", alt: "Vector diagram (3,6)", description: "<b>Figure 1</b> shows a vector `v` that moves `3` steps in the horizontal direction and `6` steps in the vertical direction.", isLinked: false, widths: "[200, 200]" %}

In Figure 1, the vector `v` is shown as an arrow starting at the origin `(0,0)` and ending at the point `(3,6)`. The arrow indicates the direction and length (magnitude) of the vector.

But linear algebra is more than just vectors. It's about the relationships between them, the transformations that can be applied, and the matrices that govern their behavior. Matrices are the ultimate data structures, allowing us to organize and manipulate vast amounts of information with ease.

{% aside %} **Matrice**: A matrix is an array of numbers, symbols, or expressions, arranged in rows and columns. Each entry in the matrix is called an element. 

Some common types of matrices include:
- Square matrix: A square matrix is a matrix with the same number of rows and columns.
- Rectangular matrix: A rectangular matrix is a matrix with a different number of rows and columns.
- Diagonal matrix: A diagonal matrix is a matrix with all elements equal to zero, except for the elements on the diagonal.
- Identity matrix: An identity matrix is a square matrix with all elements equal to zero, except for the elements on the diagonal, which are equal to one.
- Zero matrix: A zero matrix is a matrix with all elements equal to zero.
{% endaside %}

So, whether we're a student looking to gain a competitive edge, a professional seeking to stay ahead of the curve, or simply a curious mind eager to explore the wonders of mathematics, linear algebra is the perfect place to start. Join us on a journey to master the art of data manipulation, and discover the incredible possibilities.

### Vector in Python

In Python, vectors can be represented using lists or more specialized libraries like NumPy. NumPy provides a much more powerful and efficient way to handle vectors and perform mathematical operations. When working with large datasets or performing complex numerical calculations, NumPy is a crucial library that is highly recommended for optimal results.

{% aside %} 
**Python is slow, but NumPy is not!**

Python may not be the fastest kid on the block when it comes to raw computational speed, as it doesn’t compile to lower-level machine code and bytecode like Java, C#, or C. Instead, it’s dynamically interpreted at runtime, which can slow things down. But here’s the twist: Python’s numeric and scientific libraries are anything but slow. Libraries like NumPy are crafted in low-level languages like C and C++, making them incredibly efficient. Think of Python as the master conductor, orchestrating these powerful libraries to perform complex tasks seamlessly. It acts as the “glue code” that brings together the best of both worlds for your computational needs.
{% endaside %}

#### Declaring a vector using a list

Using a list is the simplest way to represent a vector in Python. However, it lacks the mathematical operations and efficiency provided by NumPy.

```python {data-copyable=true}
# Declaring a vector using a list
vector_list = [3, 4, 5]

# Accessing elements
print("Vector using list:", vector_list)
print("First element:", vector_list[0])
print("Second element:", vector_list[1])
print("Third element:", vector_list[2])
```

Output:

```text {data-copyable=true}
Vector using list: [3, 4, 5]
First element: 3
Second element: 4
Third element: 5
```

#### Declaring a vector using NumPy

NumPy is a powerful library for numerical computing in Python. It provides a more efficient and feature-rich way to handle vectors and matrices.

```python {data-copyable=true}
import numpy as np

# Declaring a vector using NumPy
vector_numpy = np.array([3, 4, 5])

# Accessing elements
print("Vector using NumPy:", vector_numpy)
print("First element:", vector_numpy[0])
print("Second element:", vector_numpy[1])
print("Third element:", vector_numpy[2])

# Performing vector operations
vector2 = np.array([1, 2, 3])
sum_vector = vector_numpy + vector2
dot_product = np.dot(vector_numpy, vector2)

print("Sum of vectors:", sum_vector)
print("Dot product of vectors:", dot_product)
```

Output:

```text {data-copyable=true}
Vector using NumPy: [3 4 5]
First element: 3
Second element: 4
Third element: 5
Sum of vectors: [4 6 8]
Dot product of vectors: 26
```

<!-- ## What exactly is linear algebra?

Linear algebra deals with the study of **linear equations**, **vector spaces**, **linear transformations**, and **matrices**. Linear algebra is hugely fundamental to many applied areas of math, statistics, operations research, data science, and machine learning. When we work with data in any of these areas, we are using linear algebra and perhaps we may not even know it. -->

[Work in progress]

<div class="references">
   <hr>
   <h2>Notes and references</h2>
   <ol>
      <!-- <li>Nil</li> -->
      <li id="ref-1">1. <strong>Feature</strong>: In ML, a feature is a measurable <em>property</em> or <em>variable</em> of the data that is used to train a model. Features are the inputs used by models to make predictions. In other words, features are the attributes or variables that describe the data, such as: Numerical values (e.g., age, temperature), categorical values (e.g., gender, color), textual data (e.g., words, sentences), and image data (e.g., pixels, shapes). They play a crucial role in determining the performance and accuracy of a model. A good feature set can help the model learn meaningful patterns and relationships in the data, leading to better predictions and decision-making. <a href="#back-to-1" class="back-to-note">↩</a>
      </li>      
      <li id="ref-2">2. <strong>Model's parameters</strong> are the variables within the model that are adjusted during the training process to minimize the error between the model’s predictions and the actual outcomes. Parameters are learned from the data. They are internal variables within a machine learning model that are adjusted during the training process. These parameters define the model’s structure and behavior, influencing how it maps input data to output predictions. The primary goal of training a model is to optimize these parameters to minimize the error between the model’s predictions and the actual target values. <a href="#back-to-2" class="back-to-note">↩</a>
      </li>
      <li id="ref-3">3. <strong>Sprint</strong>: Unlike marathon, sprint is short distance and quick run. Sprint vs. marathon is meant to convey that learning mathematics for AI and ML is not a quick or easy task. It requires a sustained effort over a long period, with patience, persistence, and dedication being essential qualities for success. <a href="#back-to-3" class="back-to-note">↩</a>
      </li>
      <li id="ref-4">4. <strong>Euler’s number</strong>: Euler's number, denoted by e, is a mathematical constant that is approximately equal to 2.71828. It is named after the Swiss mathematician Leonhard Euler and is widely used in mathematics, particularly in calculus and complex analysis. It is an irrational number, meaning its decimal representation goes on forever without repeating. It's crucial in describing processes that exhibit exponential growth or decay, such as population growth, radioactive decay, and compound interest. <a href="#back-to-4" class="back-to-note">↩</a>
      </li>
      <li id="ref-5">5. <strong>Quantities</strong> in this context refer to measurable properties or attributes that have both size (magnitude) and orientation (direction). <a href="#back-to-5" class="back-to-note">↩</a>
      </li>
      <li id="ref-6">6. <strong>Orientation</strong> refers to the direction in which the vector is pointing. Think of it like the direction an arrow is pointing. For example, if you have a vector representing the direction from New York to Los Angeles, the orientation of the vector would be the direction from east to west. <a href="#back-to-6" class="back-to-note">↩</a>
      </li>     
      <li id="ref-7">7. <strong>Displacement</strong> refers to the distance an object has moved from its initial to its final position. It's a measure of how far an object has changed its position. <a href="#back-to-7" class="back-to-note">↩</a>
      </li>                   
   </ol>
</div>