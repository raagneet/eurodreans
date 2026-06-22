import re
import urllib.request

html = urllib.request.urlopen("https://eurodreams.co.in/").read().decode('utf-8')
matches = re.finditer(r'<a href="#collapse[^>]+>.*?<span class="ekit-accordion-title">(.*?)</span>.*?<div class="elementskit-card-body[^>]+>(.*?)</div>\s*</div>\s*</div>', html, re.DOTALL)
for i, m in enumerate(matches):
    print("Q:", m.group(1).strip())
    print("A:", m.group(2).strip())
    print("---")
    if i > 15: break
