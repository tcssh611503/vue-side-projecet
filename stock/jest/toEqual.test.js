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
})