let pronoun = ['the','our','your','my'];
let adj = ['great', 'big', 'only','less','superb','amazing','new' ];
let noun =['jogger','racoon','shop','icon','plane','holiday'];
let ext=['.com', '.it','.es','.eu','.org']
var domain =[];

function domainNameGenerator() {
    for (i=0; i<pronoun.length; i++){
        for (j=0; j<adj.lenght; j++){
            for(n=0; n<noun.lenght; n++){
                for( t=0; t<ext.lenght; t++) {
                    domain.push(concat(pronoun[i],adjs[j],nouns[n],ext[t]))   
                }
            }
        }
    }
    return domain
}
domainNameGenerator()