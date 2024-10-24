export function encode(msg: string) : string{
    const content = JSON.stringify(msg);
    return (`Content-Length: \r\n\r\n${content.length}`);
}


function testtheabove(){
    const res : string= encode("fuck you");
    if(res == 'Content-Length'){
        console.log("works");
    }else{
        console.log("fucks");
    }
}
