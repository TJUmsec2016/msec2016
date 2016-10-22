package com.msec2016.expression;

import com.alibaba.fastjson.JSON;
import net.mightypork.rcalc.numbers.Fraction;

import java.util.ArrayList;
import java.util.logging.Logger;

/**
 * Created by miao on 2016/9/7.
 */
public class Problem {
    Logger logger = Logger.getLogger("Problem");
    private String definition = "";
    private String answer = "";
    private String mathJaxDefinition = "";
    private String oldDefinition = "";



    public Problem(String _definaton) {
        ArrayList<String> arrayList = beautify(_definaton);

        this.oldDefinition = _definaton;
        this.definition = arrayList.get(0);
        this.mathJaxDefinition = arrayList.get(1);
    }

    @Override
    public String toString() {
        return JSON.toJSONString(this);
    }


    public String getDefinition() {
        return definition;
    }

//    public void setDefinition(String definition) {
//        this.definition = definition;
//    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public String getMathJaxDefinition() {
        return mathJaxDefinition;
    }

    public void setMathJaxDefinition(String mathJaxDefinition) {
        this.mathJaxDefinition = mathJaxDefinition;
    }

    public String getOldDefinition() {
        return oldDefinition;
    }

    Fraction simplifyFraction(String buffer){

        if(buffer.contains("/")){   //we ignore `2/3/4`,for our generator won't do this stupid thing
            String[] bs = buffer.split("/");
            if(bs.length > 2){
                System.out.println("Generex");
                logger.warning("It must be something wrong,what we produce with Generex should not be something like `1/2/3`");
            }
            return new Fraction(Integer.parseInt(bs[0]),Integer.parseInt(bs[1])).simplify();
        }

        return new Fraction(Integer.parseInt(buffer)).simplify();
    }


    public ArrayList<String> beautify(String input){
        ArrayList<String> arrayList = new ArrayList<>();

        String buffer = "";
        String beautifyStr = "";
        String mathJaxStr = "";

        boolean parsingNumber = false;
        for (Character c : input.toCharArray()) {
            if (c.toString().matches("[0-9./]")) {    //a little like Tokenizer.tokenize,but treat '/' as number,we deal with '/' specially
                //to make sure `4/2`-> `2` and `10/4`->`5/2`
                buffer += c;
                parsingNumber = true;
            }

            else {  //not number,so a operator
                if(parsingNumber){ //previous is number
                    parsingNumber = false;

                    Fraction fraction = simplifyFraction(buffer);


                    beautifyStr += fraction.toString();
                    mathJaxStr += fraction.toMathJaxString();
                    buffer = ""; // reset buffer

                }

                beautifyStr += c.toString();
                switch (c){
                    case '*':mathJaxStr += "\\times";break;
                    case '#':mathJaxStr += "\\div";break;
                    default:mathJaxStr += c.toString();
                }

            }
        }

        // include possible last number
        if (parsingNumber) {
            Fraction fraction = simplifyFraction(buffer);
            beautifyStr += fraction.toString();

            mathJaxStr += fraction.toMathJaxString();
            System.out.println(fraction.getNumerator().toString()+fraction.getDenominator().toString());

        }


        arrayList.add(beautifyStr);
        arrayList.add(mathJaxStr);
        return arrayList;
    }
}
