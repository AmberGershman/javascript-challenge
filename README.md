<h1>Aliens Amongst Us</h1>
<h4>A JavaScripting Exercise</h4>

Hi again, friends! 

Join us today, on the <i>GW Data Analytics Bootcamp</i> Channel, for a brief foray into <strong>JavaScript</strong>! 
<h6>(previously recorded due to COVID restrictions)</h6>

Our host, Amber, will be taking us through forEach loops, the fattiest of fat arrow notation, and the extraterrestrial world of d3.select. 

<strong>Amber</strong>: Welcome back to my repo, Amber's Data Domain! I won't lie - I've been writing a lot of ReadMe's lately and I'm going a bit crazy, so I thought I would try a local TV, morning news format. It's good to see you all again, friends. 

In this episode, we will talk about basic JavaScripting, including reading in JS files in as HTML tables with forEach loops and adding filters to rerender your data. Luckily, we are starting with pre-packaged styling so we won't have to worry about the CSS elements. 

Part One: The data file provided for us was presented as a list of dictionaries and the lovely folks at Trilogy ED have already created the HTML file. This will allow us to get right into reading in the JavaScript file. 

We start by assigning our dataset as a variable. Then we use d3 in the app.js file to select the body of the table, letting the HTML know that we're tapping into it. We grab the data variable and use our first <strong>forEach</strong> statement. This will allow us to loop through each dictionary in our list, and then a second forEach statement to indicate the key/value pairs within the dictionaries. From there, we scoop up the value of each pair and, while telling HTML to create a new cell, dropping that value into the newly formed cell thus creating - a TABLE!

Beautiful! You have succesfully read your JavaScript file into HTML as a table. We're going to take a quick commercial break and we'll be back, with fun new functionality! 

---commercial break---

<strong>Amber</strong>: Welcome back! In the bottom of the hour, we set up a table from JavaScript data, but now we want to add filters so users can sort through that data. The HTML file already has a filter button, so we use d3 again to isolate the input field and then capture the value of the field. We want this to be a function because we need to add an event listener - essentailly just saying "when someone clicks on this button, run this function". I threw in a fun alert, because hey - that's showbiz, friends. We've got the values we want to match within the dataset with d3, so we use our lovely fat arrow notation to filter back into our dataset by setting the dictionary value equal to our captured input within the appropriate key. So - set the input value as a variable and then drill down into the dataset to say "only record data that matches this value in this field". And BAM - we have our filtered dataset, all by entering a search term and clicking on the button.

We have our lovely data table already set up - but now we want to rerender the table to only display our filtered data. So let's delete the table by telling the HTML to replace what's there with nothing. Just delete it - gone, done. From there, we can use the original forEach logic on our new dataset to create a new, slimmer table.

<h6>Did you say Bonus? Because I did! </h6>

The bonus asked to add additional filters, which - now that we know the structure of filter thriller - will be simplicity in itself to replicate. 

We start by going back to the HTML file, because we need to add more filters! We can literally copy and paste the pre-formed divs and update the IDs, functions, and text associated with each button. When we have all the references updated, we can also copy and paste the original filter function and update THAT appropriately - the function names, variable names, and IDs. And now - we have `${filters.length} Filters`! (joke, intended)

There we have it, friends. The wacky world of JavaScript! 

I hope you'll be able to join us next week when we discuss how a local farmer was able to successful start an investing firm, all with the help of nearby GirlScouts. Thanks for visiting us here on Amber's Data Domain. 

See you next time - bye! 

