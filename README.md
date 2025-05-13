# taller-tech

Challenge 1: Optimized Longest Palindromic Substring with Constraints
Problem Description:
Given a string s, find the longest palindromic substring (a substring that reads the same forwards and backwards).

Additional constraints:

The returned substring must not exceed 100 characters.

If there are multiple candidates with the same length, return the first one found.

If there is no palindromic substring of length ≥ 2, return null.

Input:

s → string, length 1 to 10⁵, alphanumeric characters only.

Output:

The longest palindromic substring (string), or null.

Examples:

js
Copy
Edit
Input: "abac"
Output: "aba"

Input: "tacag"
Output: "aca"

Input: "wegeeksskeegyuwe"
Output: "geeksskeeg"

Input: "abcdefgh"
Output: null