package com.gsoft.ilost;

import android.content.Intent;
import android.content.res.Resources;
import android.content.res.TypedArray;
import android.support.v7.app.AppCompatActivity;

import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentPagerAdapter;
import android.support.v4.view.ViewPager;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;


/**
 * TODO:
 * 1. Apply Navigation dots
 *
 */
public class WelcomeActivity extends AppCompatActivity {

    /**
     * The {@link android.support.v4.view.PagerAdapter} that will provide
     * fragments for each of the sections. We use a
     * {@link FragmentPagerAdapter} derivative, which will keep every
     * loaded fragment in memory. If this becomes too memory intensive, it
     * may be best to switch to a
     * {@link android.support.v4.app.FragmentStatePagerAdapter}.
     */
    private SectionsPagerAdapter mSectionsPagerAdapter;

    /**
     *  Total section numbers
     */
    private static int total_section_num = 3;

    /**
     * Titles, subtitles and icons for each section.
     */
    private static String[] titles;
    private static String[] subtitles;
    private static TypedArray icons;

    /**
     * The {@link ViewPager} that will host the section contents.
     */
    private ViewPager mViewPager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_welcome);

        // Create the adapter that will return a fragment for each of the three
        // primary sections of the activity.
        mSectionsPagerAdapter = new SectionsPagerAdapter(getSupportFragmentManager());

        // Set up the ViewPager with the sections adapter.
        mViewPager = (ViewPager) findViewById(R.id.container);
        mViewPager.setAdapter(mSectionsPagerAdapter);

        // Load resource from string values
        Resources res = getResources();
        titles = res.getStringArray(R.array.activity_welcome_title);
        subtitles = res.getStringArray(R.array.activity_welcome_subtitle);
        icons = res.obtainTypedArray(R.array.activity_welcome_icon);


    }




    /**
     * A placeholder fragment containing a simple view.
     */
    public static class PlaceholderFragment extends Fragment {


        /**
         * The fragment argument representing the section number for this
         * fragment.
         */
        private static final String ARG_SECTION_NUMBER = "section_number";

        public PlaceholderFragment() {
        }

        /**
         * Returns a new instance of this fragment for the given section
         * number.
         */
        public static PlaceholderFragment newInstance(int sectionNumber) {
            PlaceholderFragment fragment = new PlaceholderFragment();
            Bundle args = new Bundle();
            args.putInt(ARG_SECTION_NUMBER, sectionNumber);
            fragment.setArguments(args);
            return fragment;
        }

        @Override
        public View onCreateView(LayoutInflater inflater, ViewGroup container,
                                 Bundle savedInstanceState) {
            View rootView = inflater.inflate(R.layout.fragment_welcome, container, false);


            int section_num = getArguments().getInt(ARG_SECTION_NUMBER);

            /**
             *  replace titles and subtitles with the corresponding strings.
             */
            TextView titleView = rootView.findViewById(R.id.welcome_title);
            titleView.setText(titles[getArguments().getInt(ARG_SECTION_NUMBER)]);
            TextView subtitleView = rootView.findViewById(R.id.welcome_subtitle);
            subtitleView.setText(subtitles[section_num]);

            /**
             *  Replace icon
             */
            ImageView iv = rootView.findViewById(R.id.welcome_icon);
            iv.setImageResource(icons.getResourceId(section_num, 0));

            /**
             *  Display resgister button if it's the last page
             */
            if (section_num == total_section_num - 1){
                Button register_button = rootView.findViewById(R.id.register_button);
                register_button.setVisibility(View.VISIBLE);
            }

            return rootView;
        }
    }

    /**
     * A {@link FragmentPagerAdapter} that returns a fragment corresponding to
     * one of the sections/tabs/pages.
     */
    public class SectionsPagerAdapter extends FragmentPagerAdapter {

        public SectionsPagerAdapter(FragmentManager fm) {
            super(fm);
        }

        @Override
        public Fragment getItem(int position) {
            // getItem is called to instantiate the fragment for the given page.
            // Return a PlaceholderFragment (defined as a static inner class below).
            return PlaceholderFragment.newInstance(position);
        }

        @Override
        public int getCount() {
            // Show 3 total pages.
            return total_section_num;
        }
    }

    /**
     * Handler for register button
     */
    public void onRegisterButtonClick (View view) {
        Intent intent = new Intent(this, RegisterActivity.class);
        this.startActivity(intent);
    }
}
