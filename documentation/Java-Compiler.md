# Java Compiler API Specification

#### Introduction

The java version of the classical Chinese compiler is an extension of the `文言文编程语言 ` ecology, which is part of the` WenYan Programming Language` project. It can compile `文言文编程语言 ` into groovy scripts.
Or convert to class bytecode and run on the JVM platform, so it can call all code libraries in the Java ecosystem.

It simulates an array of programming languages such as the js language, and derives syntactic sugar, so that most of the `文言文编程语言 ` source files based on the js compiler version can be compiled and compatible on the JVM.

You can find its in the README.md file [source code link](https://github.com/MagicLu550/wenyan-lang_jvm)

#### use

The compiler script file has not been completed, but you can do it through a jar file, as the following instructions
```bash
java -jar wenyan.jar -c HelloWorld.wy out -r
```

For compiler parameter interpretation

`-p` value: true / false support pinyin

`-c` value: @MakeFile (compile files in batches), write the file path line by line / a file name, compile only one file

`-o` value: path to output folder

`-l` value: lib used for compilation, multiple lib paths; split

`-r` value: run-time parameters Note: This option must be placed last, it will run the file

#### API

You can also import the jar package and use it as API

```groovy
import cn.wenyan.compiler.WenYanTools

def func = WenYanTools.makeCompiler

def javaClass = compiler.compileToClass("HelloWorld","吾有一言，曰『问天地好在』，書之。")

javaClass.getDeclaredMethod("run").invoke(javaClass.newInstance())

```

API for external calls

```java
public interface WenYanCompiler extends Compile,RunCode{
    
    Class<?> compileToClass(String className,String... wenyanString);

    void runFile(String file,String[] args);

    void runFile(String file);

    void runFile(File file) throws IOException;

    // = compile(wenyan)
    String dispatch(String wenyan);

    // 简体中文 to 繁体中文
    String getTraditionalChinese(String wenyan);
}

```

#### Current progress

1. Currently in development, not all syntax is complete
2. The syntax of the implementation can be found in [README](https://github.com/MagicLu550/wenyan-lang_jvm/blob/master/README.md)

