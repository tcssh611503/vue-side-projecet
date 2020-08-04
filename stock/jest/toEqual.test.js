test('Check the object type', () => {
    let peopleA = {
        name: 'tim'
    }
    peopleA.age = 25

    //測試字串
    expect(peopleA.name).toBe('tim')
    //測試物件
    expect(peopleA).toEqual({ name: 'tim', age: 25 })
    //測試物件
    expect(peopleA).toEqual({ name: 'joy', age: 27 })
    //預防函式回傳某個結果可以使用 not 
    //確認 name 不等於空
    expect(peopleA.name).not.toBe('')
    peopleA.name = ''
    //如果 name 是空的
    expect(peopleA.name).not.toBe('')
})