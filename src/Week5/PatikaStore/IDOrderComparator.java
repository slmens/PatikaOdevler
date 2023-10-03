package Week5.PatikaStore;

import java.util.Comparator;

public class IDOrderComparator implements Comparator<MobilePhone> {

    @Override
    public int compare(MobilePhone o1, MobilePhone o2) {
        return o1.getRealId().charAt(0) - o2.getRealId().charAt(0);
    }
}
