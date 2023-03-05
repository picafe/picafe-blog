---
sidebar: auto
sidebarDepth: 2
---

# Command Line Basics

Date: October 29, 2022

The CLI, or **Command Line Interface,** is a text-based way to do stuff on your Linux computer.

(Back in the old days, this was actually the _only_ way to interact with the computer).

## Terminology

- directory = folder

## Filesystem hierarchy

- All files in Linux are arranged in a hierarchical directory structure
- A directory can hold 2 things:
  1. Files
  2. Other directories
- The topmost directory (or outermost folder) is ‘/’ and is called the root directory.
- Inside the root directory, there are many directories (most of them, you don't need to worry about). One of them is called ‘home’.
  - Inside ‘home’, each user has their own ‘home directory’ named after their username. All your personal files are in your home directory.
- If there's a directory or file inside another directory, then you can append its name to the parent directory to get its full path name.
  - for ex. bob's home directory would be called /home/bob
  - another example: /home/bob/Documents/school/math/homework.pdf

Note: if you append a slash (/) to a **directory** name, it doesn't change the meaning (it doesn't matter). This is not the case for files, however.

You may be familiar with these terms from using Windows/macOS, but it is useful to know how to use file paths in a Terminal.

## Terminal

- The Terminal is a program that allows you to use the CLI.
- Open with Ctrl-Alt-T or search for ‘Terminal’ in the applications menu.
- When using the terminal, you can think of the terminal as being ‘in’ a directory at all times.
- You interact with the computer by typing commands and then pressing Enter.

# Commands

## sudo - super user do

- `sudo` is a command that lets you run other commands as the root user. The root user is just the default user that comes with Linux. Just like how you created a user account when you installed Linux, the root user (account) also exists. However, you cannot log in as the root user, which is why you don't see it as an option on the login screen. The reason it exists is that regular users (like the one you created during installation), by default, don't have permissions to do some things on Linux. There are some directories that you cannot write to, meaning that there are some commands that you cannot run, etc. This is due to the historical use of Linux on large mainframe computers that had multiple users. But to us, it means that commands or operations that modify files outside of the /home or ~ directory need root permissions to run, as those directories are owned by the root user. In other words, to modify the directories below except home, you need to use `sudo`.

<div class="img-center">

![Root Directory](../assets/root-dir.png)

</div>

## pwd - print working directory

- outputs the ‘current’ directory, or in other words, the directory that the terminal is ‘in’ currently
- you can see the same information written in blue text on the terminal
- a tilde (~) is short for your home directory (which is /home/bob, but replacing bob with your username)

## ls - list

- lists all files and directories in the current directory
- shows you what you would normally see in a graphical file browser
- type `ls -a` to show all files, including hidden files. Hidden files are those that start with a dot (.)
- In general, you can replace the ‘a’ with other letters to modify the effect of a command. These are known as ‘options’ or ‘flags’.
  - For example, you can use the ‘l’ option with the `ls` command (type `ls -l`) to see some more info about the files and directories (don't worry about what it means)
  - Other commands have options too

## cd `<name>` - change directory

- changes the current directory. Replace `<name>` with the name of
  the directory that you wish to enter. Equivalent to clicking on a folder in a graphical file browser
- type `cd ..` to go to the parent directory
- you can chain multiple directories like so:

```bash
cd Documents/notes/
```

You can even chain ‘..’ like this:

```bash
cd ../../../
```

- you can use ‘absolute’ and ‘relative’ path names of the directories
  - absolute names start with ‘/’. for ex. /home/bob/Documents/english
  - relative names don't start with ‘/’ and are assumed to begin from the current directory. for ex. Documents/english

## man `<command>` - manual

- shows you information about the usage of a command
- replace `<command>` with a command, like ‘ls’ or ‘cd’
- press q to quit
- although the ‘man pages’ (which is the common name for these manual entries) may seem hard to understand at first, I encourage you to at least try to read the Descrip./tion section. Over time, you will learn the jargon and the man pages will become more and more helpful.
- man pages also list all the commands’ options/flags and what each option does

# More Basic Commands

## mkdir (make directory)

- To create a directory:

```bash
mkdir myDir
```

- To create a directory and also create subdirectories:

```bash
mkdir -p dir1/dir2/dir3
```

## rmdir (remove directory)

```bash
rmdir myDir
```

- rmdir only removes the directory if it's empty

## touch

- creates an empty file with the specified name

```bash
touch myFile
```

## ls (some more options for ls)

only shows files with the name “myFile”

```bash
ls myFile
```

- you can use wildcard characters:
  - ? - any one character
  - - any amount of any character(s)
  - [ab] - a or b
  - [a-z] - characters from a to z
  - [!a] - any character except a

```
ls myF?le
ls myF*
ls myFile[ab]
ls myFile[a-z]
ls myFile[!a]
```

- not very useful in this case, but you can use these wildcard characters with any command

## echo

- repeats the arguments back to you
- use > to send the output to a file (caution: it overwrites the file!)
- use >> to append the output to a file
- > and >> can be used with any command

```bash
echo Hello, world!
echo stuff > myFile
echo stuff >> myFile
```

## cat (concatenate)

- outputs contents of a file
- cat -n numbers the lines

```bash
cat myFile
cat -n myFile
```

## rm (remove)

- deletes a file (permanently! when using commands, there is no trash)
- rm -i ask you for confirmation before deleting
- Tip: always use rm -i so you don't accidentally delete anything
- rm -r deletes a directory (including its contents)
- you can combine the options. You can do this for any command

```bash
rm myFile
rm -i myFile
rm -r myDir
rm -ir myDir
```

## cp (copy)

- copy a file
- 1st argument is the source file, 2nd is the destination file
- if the destination file exists, cp will overwrite it
- if it doesn't, cp will create it
- cp -i asks for confirmation before overwriting
- always use cp -i

```bash
cp myFile myCopiedFile
cp -i myFile myNewFile
cp -r myFile myNewFile
cp myFile otherDir/overHere/myCopiedFile
```

## mv (move)

- mv can move or rename a file
- the first argument is the source file; the second argument is the destination file
- if the destination file already exists, mv will overwrite it
- if it doesn't exist, mv will create it
- mv -i asks for confirmation before overwriting
- always use mv -i
- you can also move directories
- if the source is a file, and the destination is a directory, the file gets moved into the destination directory and retains its name

```bash
mv myFile myNewFile
mv -i myFile myNewFile
mv myFile myDir/myNewFile
mv myFile ../myNewFile
mv myDir1 myDir2/
mv myFile myDir/
```

## tree

- displays contents of the current directory recursively like a tree

```bash
tree
```

## killall

- kills a certain process that is running
- useful for when an app is misbehaving or frozen

```bash
killall processname
```
