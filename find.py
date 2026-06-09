#!/usr/bin/env python3

import requests


def get_link_from_file(file_path: str) -> str:
    with open(file_path, "r", encoding="utf-8") as file:
        content: str = file.read()
    return content.strip()


url: str = get_link_from_file("link.txt")

user_input: str = input()

url += user_input

response = requests.get(url)
html_code = response.text

if "Unexpected Error" in html_code:
    print("Not found")
else:
    print("Found")
