---
title: What does yanked release mean?
description: Released and yanked are terms used in software development to indicate the state of a software package or library. These terms specify whether a given package version is suitable for usage or need to be avoided.
keywords: [yanked-release, version-control, release-management, sdlc]
categories: [yanked-release, version-control, release-management]
coverImage: ./images/yanked-release.webp
imageCredits: Image generated by DALL-E.
---

{% include "toc.md" %}

# What does "yanked" release mean?

"Released" and "yanked" are terms used in software development to indicate the state of a software package or library, especially in the context of package management systems like PyPI (Python Package Index), npm (Node.js Package Manager), and others. These terms specify whether a given package version is suitable for usage or need to be avoided. The word "yanked" may not be as well known as "released," but it is still regularly used.

## Released vs. yanked

When a version of a software package is "released," it indicates that this version is considered stable, tested, and suitable for general use. Developers are able to add it as a dependency to their projects. The released software package is expected to be reliable and well-documented.

When a version of a software package is "yanked," it means that this version is considered problematic or potentially unstable. It is no longer recommended for use in new projects, and developers are advised to avoid using it. When using `pip install`, a yanked release is always ignored unless it is the only release that matches a version specifier (using either `==`).

There could be various reasons for yanking, which include:

* **Security vulnerabilities**: The version may have known security issues.
* **Critical bugs**: The version may have critical bugs that could lead to any serious problems.
* **Incompatibility**: The version may be incompatible with other packages.
* **Legal issues**: There may be licensing or copyright concerns with the version.

A yanked release can be spotted in the snapshot below taken from the Python Package Index (PyPI). PyPi is a repository of software for the Python programming language. What shows here is the `great-expectations` library, which is one of the OSS data quality tools. We shouldn't use the release version `0.17.20` since it has been flagged as "yanked" for some reason.

{% include "postImage.html" src: "./images/example-yanked-release.png", alt: "Yanked release from PyPI", description: "<b>Figure 1: </b>Yanked release from PyPI." %}