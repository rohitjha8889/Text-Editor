const upperCase = () =>{
    let upper_case = document.getElementById('input_text').value;
    upper_case = upper_case.toUpperCase()

    document.getElementById(
        'out_para'
    ).innerHTML = `${upper_case}`;
};
const lowerCase = () =>{
    let lower_case = document.getElementById('input_text').value;
    lower_case = lower_case.toLowerCase()

    document.getElementById(
        'out_para'
    ).innerHTML = `${lower_case}`;
};

const bold_text = () =>{
    let text_bold = document.getElementById('input_text').value;
    text_bold = text_bold.bold();
    
    document.getElementById(
        'out_para'
        ).innerHTML = `${text_bold}`;
    }
    
    
    const italic_text = () =>{
        let text_italic = document.getElementById('input_text').value;
        text_italic = text_italic.italics();

        document.getElementById(
            'out_para'
        ).innerHTML = `${text_italic}`;
    }