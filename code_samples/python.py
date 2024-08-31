from typing import Callable


def debug(func: Callable) -> Callable:
    """A decorator that prints the function signature and return value"""

    def wrapper(*args, **kwargs):
        args_str = ", ".join(repr(a) for a in args)
        kwargs_str = ", ".join(f"{k}={v!r}" for k, v in kwargs.items())
        signature = f"{func.__name__}({args_str}, {kwargs_str})"
        print(f"Calling {signature}")
        result = func(*args, **kwargs)
        print(f"{func.__name__} returned {result!r}")
        return result

    return wrapper


@debug
def greet(name: str) -> str:
    greeting = f"Hello, {name}!"
    return greeting


class Person:
    def __init__(self, name: str, age: int) -> None:
        self.name = name
        self.age = age

    def introduce(self) -> None:
        print(f"Hi, I'm {self.name} and I'm {self.age} years old.")


john = Person("John", 30)
john.introduce()
print(greet("World"))
