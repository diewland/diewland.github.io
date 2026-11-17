# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal static site for diewland (GitHub Pages, `master` branch). No build, lint, or test tooling — files are served as-is. To preview locally, serve the directory with any static server (e.g. `python3 -m http.server`) and open `index.html`.

## Structure

- `index.html` — single page showing a flippable "business card": `front.jpg` / `back.jpg` inside `#card`, flipped by the jQuery Flip plugin. Bootstrap 4.1, jQuery, and Flip are all loaded from CDNs; there are no local JS/CSS files.
- `.htaccess` — short-URL redirects (`/nft`, `/youtube`, `/blog`, `/slides/<name>`, …). Adding a new short link means adding a `Redirect 301 /path <url>` line here. Note: GitHub Pages ignores `.htaccess`, so these redirects (and `proxy.php`) only work when the repo is deployed to an Apache/PHP host.
- `proxy.php` — minimal cross-domain AJAX proxy (POST `url`, returns fetched body via cURL).
- `README.md` — dated log of messages/screenshots; images live in `ss/` and are referenced by absolute `raw.githubusercontent.com` URLs. New entries go at the top.
