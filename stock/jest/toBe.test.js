test('Check the result of  + ', () => {

    //整數可以使用 toBe 或 toEqual 斷言
    expect(5 + 2).toBe(7)
    expect(5 + 2).toBe(8)
    expect(5).toEqual(5)

    //測試輸出值是否大於期望值
    expect(5).toBeGreaterThan(4)

    //測試輸出值是否大於等於期望值
    expect(5).toBeGreaterThanOrEqual(5)

    //測試輸出值是否小於期望值
    expect(5).toBeLessThan(6)

    //測試輸出值是否小於期望值
    expect(5).toBeLessThanOrEqual(5)

    //會忽略些微的誤差
    expect(0.1 + 0.2).toBeCloseTo(0.3)
    //需完全相等
    expect(0.1 + 0.2).toBe(0.3)
})