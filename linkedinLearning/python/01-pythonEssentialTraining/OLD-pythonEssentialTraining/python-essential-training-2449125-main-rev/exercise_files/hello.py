import sys

from termcolor import colored, cprint

text = colored("Hey World","magenta")
blink = colored("blinking","yellow",attrs=["reverse","blink"])

print(text)
print(blink)
cprint("use c print","blue")
                