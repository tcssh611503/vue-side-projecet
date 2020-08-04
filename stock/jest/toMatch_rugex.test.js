test('Use toMatch test',()=>{
    //搭配正規表達式
    expect('https://www.ec.co.jp/prod/1069433750').toMatch(/prod/)
    expect('https://www.ec.co.jp/p/1069433750').toMatch(/prod/)
})