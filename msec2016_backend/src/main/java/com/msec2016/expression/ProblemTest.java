package com.msec2016.expression;

import com.mifmif.common.regex.Generex;
import net.mightypork.rcalc.numbers.Fraction;
import org.testng.annotations.Test;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

/**
 * Created by miao on 2016/10/22.
 */
public class ProblemTest {

    @Test
    public void testBeautifyIsNotWrong(){

    }

    public static void main(String[] args) {

        String s = "1#4/2";
        Problem p = new Problem(s);
//        System.out.println(p.getDefinition()+" "+p.getAnswer()+" "+p.getMathJaxDefinition());

    }
}
