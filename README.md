#Introduction
This project implements the famous example from ["Why MVC is not an application architecture"](http://www.slideshare.net/spriebsch/why-mvc-is-not-an-application-architecture-confoo-2011-edition) presentation from Sebastian Priebsch in Javascript.

Besides having implemented a basic MVC pattern in Javascript, this project is also a good example application developed using the Google Closure Library. It's fully Closure-standards compliant both in JSDoc and in style, therefore is very easy to read, efficient after compilation (with ADVANCED_OPTIMIZATIONS on) and is much more, with respect to a common Javascript project.

#Compiling with Google Closure Library
Compiling with Google Closure Library can be tricky. You have to set up the scripts in the correct way, and I have to admit that the tools or their documentation are not very helpful.

This project includes nearly all of the Google Closure Tools and of course the Google Closure Library, in a special way. Actually they are subtree's of my other relevant repos.
##Whereabouts
The Google Closure Library resides under the <code>js/goog</code> directory.

Google Closure Builder resides under the <code>tools/goog/build</code> directory.

Google Closure Compiler resides under the <code>tools/good/compiler</code> directory.

Google Closure Linter sources reside under the <code>tools/closure_linter-2.2.7</code> directory.

## Style checking
The first step is to check your code's style with respect to the [Google Javascript Style Guide](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml). Google has a wonderful tool called Closure Linter that makes sure your style is right.

I had to fork it (sort of) and fix a few things, such as the line length (it was the unbearable 80 and I had to make it 120) and some indentations (I don't like 2 spaces either).

You have to read it's README and do an install with such a command as,

<code>python ./setup.py install</code>

which, of course, will differ as to your environment.

After that, you can check the style of your files with
<code>gjslint --strict --recurse app</code> or <code>gjslint --strict --recurse base</code>. I don't advise you to check the folder of Closure Library :)

If you find too many errors (hopefully you won't, in this project) you can always do a <code>fixjsstyle --strict --recurse app</code> and it will apply quick fixes for you (line spacings, missing semi-colons, etc.)
##Dependency resolution
Since Google Closure Library is a massive one and your codes in its style will be spread over to many files, Closure Tools help you to resolve dependencies with a tool called <code>depswriter</code>. It's a little bit tricky to use; here's the script I run in tools directory;
<pre>goog/build/depswriter.py --root_with_prefix='../js/base/ ../../base/' --root_with_prefix='../js/app/ ../../app' --output_file='../js/deps.js'</pre>

Now this is confusing. The actual root here is tools directory so you specify <code>../js/base/</code>; but you have to put a prefix to each file with respect to the Closure Library's <code>base.js</code> which is located in <code>/js/goog/goog/base.js</code> and that prefix should point to the file name (e.g. <code>../../base/</code> in this case).

At this point, you can use your code without compilation. See <code>index.html</code> on what files to include.
<pre>TIP: Quotes may cause you trouble on Windows machines.</pre>
##Compilation
Finally, compilation. Google Closure Compiler is by far the best Javascript minifier. But it also is a compiler in the general sense, it checks LOTS OF things, type-safety first and foremost.

The script that you have to run for compiling your scripts in this project is;
<pre>
goog/build/closurebuilder.py \
--root=../js/ \
--namespace="app1" \
--namespace="app2" \
--output_mode=compiled \
--compiler_jar=goog/compiler/compiler.jar \
--output_file=../js/compiled/compiled.js \
--compiler_flags="--compilation_level=ADVANCED_OPTIMIZATIONS" \
--compiler_flags="--output_wrapper='(function(){%output%})()'" \
--compiler_flags="--create_source_map='../js/compiled/source_map.js'" \
--compiler_flags="--property_map_output_file='../js/compiled/properties.out'" \
--compiler_flags="--variable_map_output_file='../js/compiled/variables.out'" \
--compiler_flags="--warning_level=VERBOSE" \
--compiler_flags="--externs=../js/externs.js" \
--compiler_flags="--jscomp_warning=accessControls" \
--compiler_flags="--jscomp_error=checkRegExp" \
--compiler_flags="--jscomp_error=checkTypes" \
--compiler_flags="--jscomp_error=nonStandardJsDocs" \
--compiler_flags="--jscomp_error=strictModuleDepCheck"
</pre>

If you would like to see some pretty printed script, try adding these two compiler flags to the above command;
<pre>
--compiler_flags="--formatting=PRETTY_PRINT" \
--compiler_flags="--formatting=PRINT_INPUT_DELIMITER" \
</pre>

Make sure to run it under the <code>tools</code> directory.

Well, that's pretty much it.

#Have fun :)