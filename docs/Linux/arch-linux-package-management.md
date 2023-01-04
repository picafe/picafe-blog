---
sidebar: auto
sidebarDepth: 2
---
# Arch Linux Package Management Full Guide

Date: October 29, 2022

---

Arch Linux may be a challenge for newer Linux users, especially since you have to set it up manually. However, you can quickly get past that with this fantastic [freeCodeCamp guide](https://www.freecodecamp.org/news/how-to-install-arch-linux/), [ArchInstall](https://wiki.archlinux.org/title/archinstall), or by using an arch-based distribution such as [EndeavourOS](https://endeavouros.com/).

That gets us to the next roadblock, package management. You may have used a GUI package manager such as Discover (KDE), Software (GNOME), Muon, Synaptic, or pamac on Manjaro or Arco Linux.

In Arch Linux, the package manager is called “pacman” (yes, the game). Pull up your terminal and let’s get started!

## Using the Pacman Package Manager

---

Pacman is the built-in package manager for Arch Linux. It’s like apt but for Arch. It’s used to install packages from official repositories; stable, and testing. There are four sections that you can get packages from; core, extra, community, and multilib. They are explained in detail on the [Arch Wiki page](https://wiki.archlinux.org/title/official_repositories#Stable_repositories).

Note: pacman must be used with sudo for operations that require modification to your system if you are a non-root user, or else you will get:

```bash
error: you cannot perform this operation unless you are root.
```

### Finding Packages

---

You can search for packages to install with pacman on the [Arch Linux website](https://archlinux.org/packages/) or use pacman to search for and display information about them. There are also [groups of packages](https://archlinux.org/groups/) which are how desktop environments can be installed easily.

```bash
pacman -Ss <package_name>
```

This will search for packages with the query you entered and list all that contain them in alphabetical order. 
Note: This will also search the package descriptions.

---

```bash
pacman -Ss '^<package_name>'
```

This will search the query you entered for package names (it will not search descriptions).

---

```bash
pacman -Si <package_name>
```

This will show the information about the package, such as the upstream URL and the dependencies.

---

```bash
pacman -Sg <group_name>
```

This will display a list of the packages in a group.

### Installing Packages

---

```bash
sudo pacman -S <package_name>
```

This will install the package specified and its needed dependencies.
Note: You can install multiple packages at once; leave a space between each one.

---

```bash
sudo pacman -Sw <package_name>
```

This downloads the package only without installing it.

Note: All package files are stored in **/var/cache/pacman/pkg/**

### Updating Packages

---

```bash
pacman -Qu
```

This will list all updatable packages

---

The -u flag does an upgrade; however, it is general practice to use it with -y, which synchronizes the package database.

```bash
sudo pacman -Syu
```

This does a full system upgrade. 

---

```bash
sudo pacman -Syyu
```

This force refreshes the package database as the -y option only updates your databases if they haven’t been updated recently.

---

```bash
sudo pacman -Syuu
```

This enables downgrading packages if you have a version that is newer than the one available. It shouldn’t be used unless you are trying to resolve a specific issue.

---

Pacnew files are created when updating packages. New features are usually added when packages are updated, causing the default config files to change. If you have modified your existing config files, pacman will keep your existing file and create a new .pacnew file (`ex. /etc/makepkg.conf.pacnew`). However, this can cause applications to break due to your config file being outdated. Make sure to look out for the warning when a pacnew file is made.
**Example:**

```bash
warning: /etc/makepkg.conf installed as /etc/makepkg.conf.pacnew
```

### Removing Packages

When you install a package, chances are they’ll come with some dependencies. When you remove a package, there are many options to choose how to remove one.

```bash
sudo pacman -R <package_name>
```

This removes the specified package and nothing else.

---

```bash
sudo pacman -Rs <package_name>
```

This removes the specified package and its dependencies that aren’t needed by another package. Make sure to read the transaction summary!

---

```bash
sudo pacman -Rsu <package/group_name>
```

The -u flag removes the unnecessary packages, and combined with -s which removes dependencies, this command is optimal for removing a group package.

---

```bash
sudo pacman -Rsc <package_name>
```

This removes the package, all its dependencies, and all the packages that depend on it. Use carefully, and always read the summary before confirmation.

---

```bash
sudo pacman -Rn <package_name>
```

Pacman sometimes retains information about a package before uninstalling it as a .pacsave file. Using the -n flag prevents pacman from creating the file.

---

Pacman will sometimes save modified config files for an application (`ex. makepkg.conf.pacsave`) when uninstalling the selected package. If it does, pacman will notify you with the following upon removal:

```bash
warning: /etc/makepkg.conf saved as /etc/makepkg.conf.pacsave
```

### Dealing with Cache

---

When you install a package with pacman, the packages are stored in **/var/cache/pacman/pkg/** and are not removed automatically. Packages are stored to allow for downgrades and so applications can be reinstalled from cache if uninstalled. Over time, this will build up and lead to tens of gigabytes of old packages. You can remove unneeded cached packages with pacman itself or with paccache.

Note: paccache and more and included in the `pacman-contrib` package, which you can install with `sudo pacman -S pacman-contrib`

```bash
sudo pacman -Sc 
```

This clears all cached packages that aren’t installed.

---

```bash
sudo pacman -Scc
```

This clears all cached packages (not recommended unless you really need that free storage).

---

```bash
paccache -r
```

This removes all except the three latest versions of all packages (installed and uninstalled).

---

```bash
paccache -rk1
```

This is to specify how many older versions of a package you want to keep if you want less than three (the default).

---

```bash
paccache -ruk0
```

This removes all cached versions of uninstalled packages (using the -u flag).

### Extra Commands

---

```bash
pactree <package_name>
```

This shows a tree of the dependencies for an installed package.
Note: pactree is also a part of the `pacman-contrib` package.

---

```bash
pacman -Qet
```

This will list all the packages you have installed, excluding dependencies.

---

```bash
pacman -Qdt
```

This will list all orphan packages (dependencies that are no longer needed)
Note: There may be languages such as Rust and Go, which are used to compile certain packages. It is recommended to keep them as they will need to be reinstalled when installing another package that needs it.

## Tips and Tricks

There is a whole Arch Wiki page for [pacman tips and tricks](https://wiki.archlinux.org/title/pacman/Tips_and_tricks), and we encourage you to check it out as you’ll be using the Arch Wiki a lot! Check out the contents list and discover what you think will help improve your Arch experience. 

## The Arch User Repository (AUR)

The AUR or Arch User Repository is a repository where fellow Arch users can upload build files to packages so you can use them on Arch Linux. This purely community-driven repository is why Arch Linux has the most available packages to users. The AUR contains PKGBUILDs in GitHub repositories, allowing you to make a package from the source. Before installing a package, I would highly recommend first checking it out on the [AUR website](https://aur.archlinux.org/packages) to see if it is positively voted or not, as some packages can be outdated, broken, or have a virus (although this is extremely rare).

You can install packages from the AUR manually or with something known as an AUR helper. When you manually install packages from the AUR, you have to clone the git repository and build the package manually. You’ll have to git pull and rebuild when the package receives an update. However, with an AUR helper such as yay, all this is done for you. I’ll show you how to install AUR packages manually so you understand how it works.

First, go to the AUR website and select the package you need. For the example, we’ll be using the yay package (an AUR helper), as you’ll need that in the next bit.

Note: If you’re using EndeavourOS, yay is preinstalled, so you can skip this step.

---

First, ensure you have git installed (if not, `sudo pacman -S git`). Then, you have to clone the repo and cd into it.

```bash
git clone https://aur.archlinux.org/yay.git && cd yay
```

Then you have to build the package with makepkg.

```bash
makepkg -si
```

The -s installs the required dependencies with pacman (in our case, the dependency is the Go language), and -i installs the package after it is built.

## Using the Yay AUR Helper

Now that you have yay, you can easily install packages from the AUR! There isn’t much of a learning curve, as yay uses the same syntax for finding, installing, and updating packages. However, there are some useful commands you may want to know.  

Note: yay should **not** be run with sudo, as it will prompt you to enter your password when needed.

```bash
yay -Ps
```

This command will print system statistics, such as how much space your cached packages are taking up and the size of your largest packages. 

---

```bash
yay -Sc
```

This command will help you clear all unneeded pacman and yay cache while keeping cache for all installed packages.  

## Useful pacman.conf Settings

Lastly, here are some quick and helpful lines you may want to add to your `pacman.conf` file (located at `/etc/pacman.conf` ).

Uncomment the lines in that file using nano (with sudo) to make it look like the following:

```bash
# Misc options
UseSyslog
Color
#NoProgressBar
CheckSpace
VerbosePkgLists
#ParallelDownloads = 5
```

 `UseSyslog` will log pacman action entries in `/var/log/messages`

`Color` will enable colour in pacman’s output; however, only when in tty.

`VerbosePkgLists` will display the name, version and size of target packages in a table for more appealing action overviews.