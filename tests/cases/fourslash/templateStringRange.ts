/// <reference path="fourslash.ts" />

// repro notes:
// Must have an interpolation appearing somewhere prior
// Must have a newline inside the error template
// Must have something following it

////`${}`;
////`
////`;/**/1

goTo.marker();
edit.insert('\n');
verify.quickInfoIs("");

/*NOTES:
template: 0--5
    head:
        kind: TemplateHead
        0--3 (` $ {)
        text: ""

    templateSpans: 3--5
        [0]:
            kind: TemplateSpan
            3--5
            literal:
                kind: LastTemplateToken
                3--5
                text: ""


template: 0--5


*/

/*MORE NOTES

scanTemplateAndSetTokenValue:
    starts *after* the backtick



*/
