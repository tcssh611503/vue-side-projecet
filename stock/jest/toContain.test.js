test('For array test in jest',()=>{
    let arrA = ['A','B','C']

    //檢查陣列內是否含有某值
    expect(arrA).toContain('B')
    
    //搭配迴圈檢查每個位置都不等於空
    for(let i in arrA){
        expect(arrA[i]).not.toBe('')
    }
})