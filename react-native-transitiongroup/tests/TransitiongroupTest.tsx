import React, { useState } from 'react';

import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Animated,
    Easing,
    TouchableHighlight
} from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
const AnimatedView = Animated.createAnimatedComponent(View);
import TransitionGroup, { FadeInOutTransition } from "react-native-transitiongroup";
export const PALETTE = {
    REACT_CYAN_LIGHT: 'hsl(193, 95%, 68%)',
    REACT_CYAN_DARK: 'hsl(193, 95%, 30%)',
};

export function Button({ label, onPress }: { onPress: () => void; label: string }) {
    return (
        <TouchableHighlight
            underlayColor={PALETTE.REACT_CYAN_DARK}
            style={{
                paddingVertical: 6,
                paddingHorizontal: 12,
                backgroundColor: PALETTE.REACT_CYAN_LIGHT,
                borderWidth: 2,
                borderColor: PALETTE.REACT_CYAN_DARK,
            }}
            onPress={onPress}>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 12 }}>
                {label}
            </Text>
        </TouchableHighlight>
    );
}



const width = 50;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressView: {
        marginTop: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: '700',
    },
    text: {
        fontSize: 18,
        fontWeight: '500',
        marginTop: 10,
        color: "red"
    },
    sliders: {
        margin: 20,
        paddingBottom: 80,
    },
    title: {
        fontSize: 30,
    },
    sliderOne: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    sliderMiddle: {
        height: 80,
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
    },
    sliderSmall: {
        marginLeft: 20,
        marginRight: 20,
    },
    absoluteContainerTwo: {
        position: "absolute",
        bottom: -150,
        left: -100,
    },
    absoluteContainerThree: {
        position: "absolute",
        bottom: -250,
        left: -100,
    }
});




const TestTransitiongroup = () => {
    const [showTexta, setShowTexta] = useState(false)
    const [showTextb, setShowTextb] = useState(false)
    const [showTextc, setShowTextc] = useState(false)
    const [showTextd, setShowTextd] = useState(false)
    const [showTextf, setShowTextf] = useState(false)
    const [showTexte, setShowTexte] = useState("我没被触发")
    const [showTextg, setShowTextg] = useState(false)
    return (
        <ScrollView>
            <Tester>
                <ScrollView>
                    <TestSuite name="react-native-transitiongroup">
                        <TestCase
                            key={"inDuration=500"}
                            itShould={`animation inDuration=500`}
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ flex: 1 }}>
                                        <TransitionGroup>
                                            {showTextb && (
                                                <FadeInOutTransition inDuration={500}>
                                                    <View>
                                                        <Text style={styles.text}>Hello, Transition Group!!</Text>
                                                    </View>
                                                </FadeInOutTransition>
                                            )}
                                        </TransitionGroup>
                                        <Button onPress={() => {
                                            setShowTextb(!showTextb)
                                            setState(true)
                                        }} label={"切换"}></Button>
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />
                        <TestCase
                            key={"inDuration=3000"}
                            itShould={`animation inDuration=3000`}
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ flex: 1 }}>
                                        <TransitionGroup>
                                            {showTextb && (
                                                <FadeInOutTransition inDuration={3000}>
                                                    <View>
                                                        <Text style={styles.text}>Hello, Transition Group!!</Text>
                                                    </View>
                                                </FadeInOutTransition>
                                            )}
                                        </TransitionGroup>
                                        <Button onPress={() => {
                                            setShowTextb(!showTextb)
                                            setState(true)
                                        }} label={"切换"}></Button>
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />
                        <TestCase
                            key={"inDelay=500"}
                            itShould={`animation inDelay=500`}
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ flex: 1 }}>
                                        <TransitionGroup>
                                            {showTextf && (
                                                <FadeInOutTransition inDelay={500}>
                                                    <View>
                                                        <Text style={styles.text}>Hello, Transition Group!!</Text>
                                                    </View>
                                                </FadeInOutTransition>
                                            )}
                                        </TransitionGroup>
                                        <Button onPress={() => {
                                            setShowTextf(!showTextf)
                                            setState(true)
                                        }} label={"切换"}></Button>
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />
                        <TestCase
                            key={"inDelay=3000"}
                            itShould={`animation inDelay=3000`}
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ flex: 1 }}>
                                        <TransitionGroup>
                                            {showTextf && (
                                                <FadeInOutTransition inDelay={3000}>
                                                    <View>
                                                        <Text style={styles.text}>Hello, Transition Group!!</Text>
                                                    </View>
                                                </FadeInOutTransition>
                                            )}
                                        </TransitionGroup>
                                        <Button onPress={() => {
                                            setShowTextf(!showTextf)
                                            setState(true)
                                        }} label={"切换"}></Button>
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />


                        <TestCase
                            key={"outDuration=500"}
                            itShould={`animation outDuration=500`}
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ flex: 1 }}>
                                        <TransitionGroup>
                                            {showTextc && (
                                                <FadeInOutTransition outDuration={500}>
                                                    <View>
                                                        <Text style={styles.text}>Hello, Transition Group!!</Text>
                                                    </View>
                                                </FadeInOutTransition>
                                            )}
                                        </TransitionGroup>
                                        <Button onPress={() => {
                                            setShowTextc(!showTextc)
                                            setState(true)
                                        }} label={"切换"}></Button>
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />


                        <TestCase
                            key={"outDuration=3000"}
                            itShould={`animation outDuration=3000`}
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ flex: 1 }}>
                                        <TransitionGroup>
                                            {showTextc && (
                                                <FadeInOutTransition outDuration={3000}>
                                                    <View>
                                                        <Text style={styles.text}>Hello, Transition Group!!</Text>
                                                    </View>
                                                </FadeInOutTransition>
                                            )}
                                        </TransitionGroup>
                                        <Button onPress={() => {
                                            setShowTextc(!showTextc)
                                            setState(true)
                                        }} label={"切换"}></Button>
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />

                        <TestCase
                            key={"outDelay500"}
                            itShould={`animation outDelay=500`}
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ flex: 1 }}>
                                        <TransitionGroup>
                                            {showTextg && (
                                                <FadeInOutTransition outDelay={500}>
                                                    <View>
                                                        <Text style={styles.text}>Hello, Transition Group!!</Text>
                                                    </View>
                                                </FadeInOutTransition>
                                            )}
                                        </TransitionGroup>
                                        <Button onPress={() => {
                                            setShowTextg(!showTextg)
                                            setState(true)
                                        }} label={"切换"}></Button>
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />
                        <TestCase
                            key={"outDelay3000"}
                            itShould={`animation outDelay=3000`}
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ flex: 1 }}>
                                        <TransitionGroup>
                                            {showTextg && (
                                                <FadeInOutTransition outDelay={3000}>
                                                    <View>
                                                        <Text style={styles.text}>Hello, Transition Group!!</Text>
                                                    </View>
                                                </FadeInOutTransition>
                                            )}
                                        </TransitionGroup>
                                        <Button onPress={() => {
                                            setShowTextg(!showTextg)
                                            setState(true)
                                        }} label={"切换"}></Button>
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />
                        <TestCase
                            key={"getInitStatus_3"}
                            itShould={`animation easing Easing.ease`}
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ flex: 1 }}>
                                        <TransitionGroup>
                                            {showTextd && (
                                                <FadeInOutTransition easing={Easing.ease}>
                                                    <View>
                                                        <Text style={styles.text}>Hello, Transition Group!!</Text>
                                                    </View>
                                                </FadeInOutTransition>
                                            )}
                                        </TransitionGroup>
                                        <Button onPress={() => {
                                            setShowTextd(!showTextd)
                                            setState(true)
                                        }} label={"切换"}></Button>
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />
                        <TestCase
                            key={"pointerEvents"}
                            itShould={`animation pointerEvents`}
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ flex: 1 }}>
                                        <TransitionGroup pointerEvents="box-none" onPress={(event) => {
                                            setShowTexte("我被触发了22")

                                        }} >
                                            <FadeInOutTransition onPress={(event) => {
                                                setShowTexte("我被触发了111")
                                            }}>
                                                <View>
                                                    <Text style={styles.text} onPress={(event) => {
                                                        setShowTexte("我被触发了00")
                                                        setState(true)
                                                    }}>{showTexte}</Text>
                                                </View>
                                            </FadeInOutTransition>
                                        </TransitionGroup>
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />

                        <TestCase
                            key={"getInitStatus_5"}
                            itShould={`animation style backgroundColor:"pink"`}
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ flex: 1 }}>
                                        <TransitionGroup pointerEvents="box-none" style={{ backgroundColor: "pink" }}>
                                            <FadeInOutTransition>
                                                <View>
                                                    <Text style={styles.text} >1111111</Text>
                                                </View>
                                            </FadeInOutTransition>
                                        </TransitionGroup>
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />

                        <TestCase
                            key={"getInitStatus_5"}
                            itShould={`backgroundColor: "yellow",padding:20"`}
                            tags={['C_API']}
                            initialState={false}
                            arrange={({ setState }) => {
                                return (
                                    <View style={{ flex: 1 }}>
                                        <TransitionGroup pointerEvents="box-none" style={{ backgroundColor: "yellow", padding: 30, }}>
                                            <FadeInOutTransition>
                                                <View>
                                                    <Text style={{color:'red'}}>
                                                   ` TransitionGroup  style= backgroundColor: "yellow", padding: 100, `

                                                    </Text>
                                                </View>
                                            </FadeInOutTransition>
                                        </TransitionGroup>
                                    </View>
                                );
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true;
                            }}
                        />

                    </TestSuite>
                </ScrollView>
            </Tester>
        </ScrollView>
    );
}

export default TestTransitiongroup

