var loc = window.location.href;
console.log(loc);
if (loc.endsWith("#contact"))
{
console.log("#contact");
var element = document.querySelector("contact");

// smooth scroll to element and align it at the bottom
element.scrollIntoView({ behavior: 'smooth', block: 'end'});
}
if (loc.endsWith("#subjects"))
    {
        var element = document.querySelector("subjects");

// smooth scroll to element and align it at the bottom
element.scrollIntoView({ behavior: 'smooth', block: 'end'});
    }