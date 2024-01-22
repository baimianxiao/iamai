# iamai.exceptions

iamai 异常。

下列是 iamai 运行过程中可能会抛出的异常。这些异常大部分不需要用户处理， iamai 会自动捕获并处理。
对于适配器开发者，所有适配器抛出的异常都应该继承自 `AdapterException` 。

## _class_ `EventException` {#EventException}

Bases: `BaseException`

事件处理过程中由插件抛出的异常，用于控制事件的传播，会被 iamai 自动捕获并处理。

### _method_ `__init__(self, /, *args, **kwargs)` {#BaseException.\_\_init\_\_}

Initialize self.  See help(type(self)) for accurate signature.

- **Arguments**

  - **args**

  - **kwargs**

## _class_ `SkipException` {#SkipException}

Bases: `iamai.exceptions.EventException`

跳过当前插件继续当前事件传播。

### _method_ `__init__(self, /, *args, **kwargs)` {#BaseException.\_\_init\_\_}

Initialize self.  See help(type(self)) for accurate signature.

- **Arguments**

  - **args**

  - **kwargs**

## _class_ `StopException` {#StopException}

Bases: `iamai.exceptions.EventException`

停止当前事件传播。

### _method_ `__init__(self, /, *args, **kwargs)` {#BaseException.\_\_init\_\_}

Initialize self.  See help(type(self)) for accurate signature.

- **Arguments**

  - **args**

  - **kwargs**

## _class_ `iamaiException` {#iamaiException}

Bases: `Exception`

所有 iamai 发生的异常的基类。

### _method_ `__init__(self, /, *args, **kwargs)` {#Exception.\_\_init\_\_}

Initialize self.  See help(type(self)) for accurate signature.

- **Arguments**

  - **args**

  - **kwargs**

## _class_ `GetEventTimeout` {#GetEventTimeout}

Bases: `iamai.exceptions.iamaiException`

当 get 方法超时使被抛出。

### _method_ `__init__(self, /, *args, **kwargs)` {#Exception.\_\_init\_\_}

Initialize self.  See help(type(self)) for accurate signature.

- **Arguments**

  - **args**

  - **kwargs**

## _class_ `AdapterException` {#AdapterException}

Bases: `iamai.exceptions.iamaiException`

由适配器抛出的异常基类，所有适配器抛出的异常都应该继承自此类。

### _method_ `__init__(self, /, *args, **kwargs)` {#Exception.\_\_init\_\_}

Initialize self.  See help(type(self)) for accurate signature.

- **Arguments**

  - **args**

  - **kwargs**

## _class_ `LoadModuleError` {#LoadModuleError}

Bases: `iamai.exceptions.iamaiException`

加载模块错误，在指定模块中找不到特定类型的类或模块中存在多个符合条件的类时抛出。

### _method_ `__init__(self, /, *args, **kwargs)` {#Exception.\_\_init\_\_}

Initialize self.  See help(type(self)) for accurate signature.

- **Arguments**

  - **args**

  - **kwargs**