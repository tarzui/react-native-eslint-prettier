/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        alignContent: 'flex-start',
        justifyContent: 'center',
        alignItems: 'flex-start',
        margin: 20,
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 18,
        }}>{`React Native Eslint config Prettier\n`}</Text>
      <Text>
        {`npm i -D eslint eslint-config-prettier eslint-plugin-prettier prettier\n`}
      </Text>
      <Text>
        {`// eslintrc
        module.exports = {
          parserOptions: {
            ecmaVersion: 7,
            sourceType: 'module',
            ecmaFeatures: {
              jsx: true,
            },
          },
          extends: ['plugin:prettier/recommended'],

          plugins: ['prettier'],

          rules: {
            'prettier/prettier': 'error',
          },
        };
        `}
      </Text>
      <Text>
        {`// prettierrc
        module.exports = {
          bracketSpacing: false,
          jsxBracketSameLine: true,
          singleQuote: true,
          trailingComma: 'all',
          semi: true,
          singleQuote: true,
          tabWidth: 2,
          useTabs: false,
        };`}
      </Text>
      <Text>
        {`// babel.config
        module.exports = {
          presets: ['module:metro-react-native-babel-preset'],
        };`}
      </Text>
    </View>
  );
};

export default App;
