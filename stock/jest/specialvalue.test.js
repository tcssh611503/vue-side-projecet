test('Special value',()=>{
    //期望值為 true
    expect(true).toBeTruthy()
    
    //期望值為 false
    expect(false).toBeFalsy()

    //期望值為 null
    expect(null).toBeNull()

    //期望值為 undefined
    expect(undefined).toBeUndefined()

    //期望值為 undefined 之外的值
    expect(null).toBeDefined()
})