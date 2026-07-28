import fs from 'node:fs';
import path from 'node:path';
const failures=[];
for(const kind of ['research','alternatives']){
  const dir=path.join(process.cwd(),'content',kind);
  for(const file of fs.readdirSync(dir).filter(name=>/\.mdx?$/.test(name))){
    const raw=fs.readFileSync(path.join(dir,file),'utf8');
    const block=raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if(!block){failures.push(`${kind}/${file}: missing frontmatter`);continue}
    for(const key of ['title','description','published','category','featuredImage'])if(!new RegExp(`^${key}:\\s*.+`,'m').test(block[1]))failures.push(`${kind}/${file}: missing ${key}`);
    if(kind==='research'){const sources=block[1].match(/^sources:\s*(.+)$/m);try{if(!sources||JSON.parse(sources[1]).length<10)failures.push(`${kind}/${file}: research requires at least 10 sources`)}catch{failures.push(`${kind}/${file}: invalid sources JSON`)}}
    if(kind==='alternatives'&&!/^type:\s*.+/m.test(block[1]))failures.push(`${kind}/${file}: missing type`);
    const image=block[1].match(/^featuredImage:\s*["']?([^"'\r\n]+)["']?/m)?.[1];
    if(image&&!fs.existsSync(path.join(process.cwd(),'public',image.replace(/^\//,''))))failures.push(`${kind}/${file}: missing image ${image}`);
  }
}
if(failures.length){console.error(failures.join('\n'));process.exit(1)}
console.log('Content contracts, source minimums, and featured images passed.');
