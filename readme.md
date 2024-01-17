***The app holds no guarantee of security. As of now it is not fully compliant with the Electronegativity test. It is likely more compliant than many other boilerplates however. I'm not an expert, I just like making things***
# Simply Electropositive ( Work in progress)
## Aim and offering
The goal of the repository is to make a lightweight yet security-passing boilerplate for simple Electron apps. The electronegativity test was the sole point of reference in trying to make the app secure.
## ***There is no guarantee in security or safety in using the product. It is not complete. USE AT YOUR OWN RISK***



## Testing (17/01/24)
Remaining issues are tentative with the exception of the CSP global check, which I believe may be the result of [Google CSP Evaluator](https://csp-evaluator.withgoogle.com/) deeming the meta tag invalid. I also think that the limit navigation check is a false positive, although as heralded prior, my opinion regarding programming should be taken with a pinch of salt. 

| issue | severity | confidence | filename | location | sample | description | url |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| package.json | 0:00 | N/A | Check if there are security patches applied in between the Electron version used and the latest | https://github.com/doyensec/electronegativity/wiki/AVAILABLE_SECURITY_FIXES_GLOBAL_CHECK |  |  |  |
| CSP_GLOBAL_CHECK | LOW | FIRM | index.html | 6:00 | default-src 'self'; script-src 'self'; style-src 'self'; object-src 'self' | One or more CSP directives detected seems to be vulnerable | https://github.com/doyensec/electronegativity/wiki/CSP_GLOBAL_CHECK |
| LIMIT_NAVIGATION_JS_CHECK | HIGH | TENTATIVE | main.js | 13:04 | win.webContents.on('will-navigate', (event, url) => { | Evaluate the implementation of the custom callback in the .on new-window and will-navigate events | https://github.com/doyensec/electronegativity/wiki/LIMIT_NAVIGATION_JS_CHECK |
| LIMIT_NAVIGATION_JS_CHECK | HIGH | TENTATIVE | main.js | 18:04 | win.webContents.on('new-window', (event, url) => { | Evaluate the implementation of the custom callback in the .on new-window and will-navigate events | https://github.com/doyensec/electronegativity/wiki/LIMIT_NAVIGATION_JS_CHECK |
