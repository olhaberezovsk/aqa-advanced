function divide(numerator, denominator) {
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error("Please enter numbers specifically!") 
    }
    if (denominator === 0) {
        throw new Error("Divide by 0 is restricted by law!") 
    }
    return numerator / denominator;
}

try { console.log(divide('test', 'test2'))
} catch (error) {
    console.error("Error! ", error.message)
} finally {
    console.log("The end!")
}

try { console.log(divide(5, 0))
} catch (error) {
    console.error("Error! ", error.message)
} finally {
    console.log("The end!")
}

try { console.log(divide(10, 2))
} catch (error) {
    console.error("Error! ", error.message)
} finally {
    console.log("The end!")
}