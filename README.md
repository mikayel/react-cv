# react-cv

I believe that React is the only JS library that can use the composite view pattern (CV) easily.
With composite view pattern we can make our life very easy to scale huge applications.  Just by copying the react component (page) and creating new rout.

#The Composite View Pattern
All websites have something in common: they are made of pages that share similar structures. The pages share the same layout, while each page is made of different independent pieces, but always placed in the same position across all the site.

The Composite View pattern formalizes this typical use, by allowing to create pages that have a similar structure, in which each section of the page vary in different situations.

#How the pattern works
To understand this pattern, let's take an example. In the following picture you can see a typical structure of a web page.

| Header | 
| ------------- | 
| Menu ! Body |
| Footer  | 

This structure is called "Classic Layout". The template organizes the page according to this layout, putting each "piece" in the needed place, so that the header goes up, the footer down, etc.
It can happen that, for example clicking on a link, it is needed to change only a part of the page, typically the body.

|--------  |---------
As you can see, the pages are different, but their difference is only in the body part. Note that, however, the pages are distinct, it is not like a refresh of a frame in a frameset!

Using the composite view pattern, the other part of the page have been reused, and the layout consistence has been preserved.

#The role of the View Helper
Each piece of the composed page can have a "view helper". This pattern allows the preparation of the data to be displayed in a consistent way for the page piece itself, for example to create a menu.


#Composite View vs. Decorator
Tiles is a composite view framework: it allows to reuse page pieces across the application. But another approach to achieve the same result is using the Decorator pattern. For example, Sitemesh is based on the Decorator pattern.
Instead of creating a template and organizing the pieces together, the Decorator pattern (in this case) takes a simple HTML page, transforms it adding the missing pieces (in our example, adding header, footer and menu) and finally renders it.
Here you can find a comparison table between the two patterns.

| Aspect  | Composite View | Decorator |
| ------------- | ------------- | ------------- |
| Reusability  | The different parts of the page (template and pieces) can be reused across the whole application.  | Each decorator can be reused, but the decoration itself can be applied to one page at a time.  |
| Ease of configuration | Each page must be defined explicitly. | The decorator can be applied even to the entire application. |
| Runtime configuration |	The pages can be configured and organized at runtime |	Since one page is decorated at a time, this feature is not present. |
| Performances 	| Low overhead for composition. |	The page to be decorated has to be parsed. |

