var v = document.querySelector( 'input' ); // v = inputに入っているもの

function update(disp_val) //「AC」が押されたときにdisp_valを更新する(""となっているので表示が消える)
    {
        v.value = disp_val; //inputに入力された値をdisp_valに代入する
    }
            
function append(disp_val) //「数字や演算子」のボタンが押されたとき、disp_valに追加する
    {
        v.value += disp_val; //inputに入力された値をそれぞれの値をdisp_valに加えていく
    }
            
function calc() //「=」が押されたときに計算する
    {
        v.value = new Function( 'return '+ v.value )(); //inputに入力された文字列を返し、Function関数で計算する
    }