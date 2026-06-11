#!/usr/bin/env python3

"""
Checks if an e-olymp user exists by analyzing the profile page response.
"""

import requests


username = input("Enter username: ").strip()
url = "https://www.eolymp.com/en/users/" + username

response = requests.get(url, timeout=1, stream=True)

if "Unexpected Error" in response.text:
    print("Not found")
else:
    print("Found")
