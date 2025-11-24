# Deployment Guide

Since you want to use **GitHub + Netlify**, here is the easiest way to host your site for free.

## Prerequisites
1.  A [GitHub](https://github.com/) account.
2.  A [Netlify](https://www.netlify.com/) account.

## Step 1: Push to GitHub
I have already initialized a local Git repository for you. Now you need to push it to GitHub.

1.  **Create a new repository** on GitHub:
    *   Go to [github.com/new](https://github.com/new).
    *   Name it `personal-site` (or whatever you like).
    *   Make it **Public**.
    *   **Do not** initialize with README, .gitignore, or License (we already have them).
    *   Click **Create repository**.

2.  **Link your local code**:
    *   Copy the commands under "…or push an existing repository from the command line".
    *   They will look like this (run these in your terminal):
        ```bash
        git add .
        git commit -m "Initial commit"
        git branch -M main
        git remote add origin https://github.com/YOUR_USERNAME/personal-site.git
        git push -u origin main
        ```

## Step 2: Connect to Netlify
1.  Log in to [Netlify](https://app.netlify.com/).
2.  Click **"Add new site"** > **"Import from an existing project"**.
3.  Select **GitHub**.
4.  Authorize Netlify to access your GitHub account.
5.  Select your `personal-site` repository.

## Step 3: Configure Build Settings
Netlify should detect these automatically, but double-check:
*   **Build command**: `npm run build`
*   **Publish directory**: `dist`

Click **Deploy Site**.

## Success!
Netlify will build your site and give you a URL (e.g., `mystical-name-12345.netlify.app`).
You can change this in **Site Settings** > **Domain Management**.

## Updating Your Site
Whenever you make changes (like editing `content.json`):
1.  Run:
    ```bash
    git add .
    git commit -m "Update content"
    git push
    ```
2.  Netlify will detect the push and **automatically redeploy** your site within seconds.
