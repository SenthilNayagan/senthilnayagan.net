---
title: Contact Me
description: Contact me.
permalink: /contact/
layout: contact
---

<form action="{{ site.contactMe }}" method="POST">    
    <p>Please feel free to send your message to me. I will respond as soon as I can.</p>
    <p>&nbsp;</p>
    <div class="post-comment stack gap-0">
        <div class="post-comment stack">
            <input type="text" name="name" placeholder="Name*" required>
        </div>
        <div class="post-comment stack">
            <input type="email" name="_replyto" placeholder="E-mail Address*" required>
        </div>
        <div class="post-comment stack">
            <textarea name="message" placeholder="Message*" required></textarea>
        </div>
        <div class="post-comment stack">
            <input type="submit" value="Send">
        </div>
    </div>
</form>